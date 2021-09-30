let instanceType = "deeplabtflite";
let computeTime = 0;
let computeStart = 0;
const outputDimensions = [1, 321, 321, 21];

const inputOptions = {
  mean: [127.5, 127.5, 127.5],
  std: [127.5, 127.5, 127.5],
  scaledFlag: false,
  inputLayout: 'nhwc',
  inputDimensions: [1, 321, 321, 3], // deeplab
  inputResolution: [321, 321]
};

let outputBuffer;
let continueinputvideo = true;
console.log("not in worker create context: ", navigator.ml);

const worker = new Worker('../js/tflite/deeplab/webnn/webnnworker.js');

const pipeline2 = buildWebGL2Pipeline(
  inputvideo,
  backgroundImageSource,
  "none",
  [321, 321],
  outputcanvas,
  null,
);

function stopCamera() {
  stream.getTracks().forEach((track) => {
    if (track.readyState === 'live' && track.kind === 'video') {
      track.stop();
    }
  });
}

function renderCamStream() {
  const inputBuffer = getInputTensor(inputvideo, inputOptions);
  let obj = {
    task: 'nncompute',
    value: inputBuffer,
  }
  computeStart = performance.now();
  worker.postMessage(obj);
}

async function drawOutput(outputBuffer, srcElement) {
  if (instanceType.startsWith('deeplab')) {
    outputBuffer = tf.tidy(() => {
      const a = tf.tensor(outputBuffer, outputDimensions, 'float32');
      let axis = 3;
      if (instanceType === 'deeplabnchw') {
        axis = 1;
      }
      const b = tf.argMax(a, axis);
      const c = tf.tensor(b.dataSync(), b.shape, 'float32');
      return c.dataSync();
    });
  }
  console.log('output: ', outputBuffer);
  outputcanvas.width = srcElement.naturalWidth | srcElement.videoWidth;
  outputcanvas.height = srcElement.naturalHeight | srcElement.videoHeight;
  const pipeline = buildWebGL2Pipeline(
    srcElement,
    backgroundImageSource,
    backgroundType,
    inputOptions.inputResolution,
    outputcanvas,
    outputBuffer,
  );
  const postProcessingConfig = {
    smoothSegmentationMask: true,
    jointBilateralFilter: { sigmaSpace: 1, sigmaColor: 0.1 },
    coverage: [0.5, 0.75],
    lightWrapping: 0.3,
    blendMode: 'screen',
  }
  pipeline.updatePostProcessingConfig(postProcessingConfig);
  await pipeline.render();
}

const createOWTStream = async () => {
  stream = await Owt.Base.MediaStreamFactory.createMediaStream(
    avTrackConstraint
  );
  if ("srcObject" in inputvideo) {
    inputvideo.srcObject = stream;
  } else {
    inputvideo.src = URL.createObjectURL(stream);
  }

  inputvideo.autoplay = true;
}

const videoCanvasOnFrame = async () => {
  if (continueinputvideo) {
    window.requestAnimationFrame(videoCanvasOnFrame);
    // ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
    if (stream) {
      const postProcessingConfig2 = {
        smoothSegmentationMask: true,
        jointBilateralFilter: { sigmaSpace: 1, sigmaColor: 0.1 },
        coverage: [0.5, 0.75],
        lightWrapping: 0.3,
        blendMode: 'screen',
      }
      pipeline2.updatePostProcessingConfig(postProcessingConfig2);
      await pipeline2.render();
    }
  }
}


const oneWebMeetOWT = async () => {
  await createOWTStream();
  backgroundType = "blur";
  continueinputvideo = true;
  await videoCanvasOnFrame();
  getProcessedStream();
  initConference();
  userMarquee();
  // ssLoad();

  let obj = {
    task: 'nnwarmup',
    value: null,
  }
  worker.postMessage(obj);


  // // if(parsePathnameBackend().toLowerCase() === 'webnn' && parseSearchParams("ds") === "1") {
  // if(parsePathnameBackend().toLowerCase() === 'wasm' && parseSearchParams("ds") === "0") {
  //   console.log("^^^^^^^^^^^^^^^^^ WIN ^^^^^^^^^^^^^^^^^^^^")
  //   let worker = new Worker('../js/tflite/deeplab/webnn/webnnworker.js');
  //   worker.postMessage(['loadtask', 'computetask']);

  //   worker.addEventListener('message', (e) => {
  //     const { msg } = e.data;
  //     $("#worker").html(msg);
  //   });
  // } else {
  //   ssLoad();
  // }
};

worker.addEventListener('message', async (e) => {
  const { msg } = e.data;
  if (msg === "modelloaded") {
    $("#modelloadstatus").html('Model Loaded');
    $("#tbb").prop('disabled', false);
    $("#tbr").prop('disabled', false);
    $("#tbb").removeClass('disabled');
    $("#tbr").removeClass('disabled');
  } else {
    // Start receiving computed outputBuffer
    outputBuffer = e.data;
    computeTime = (performance.now() - computeStart).toFixed(2);
    await drawOutput(outputBuffer, inputvideo);
    console.log(`  done in ${computeTime} ms.`);

    if (continueAnimating) {
      renderCamStream();
      spaninference.html(computeTime);
      let ct = parseInt(computeTime);
      $("#fps").html((1000 / ct).toFixed(0));
    }
  }
});

const ssConfig = async (isSS, effect) => {
  if (isSS && effect) {
    backgroundImageSource.src = '../../assets/img/ssbg/0.jpg'
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    backgroundType = effect;
    continueAnimating = true;

    try {
      inputvideo.onloadedmediadata = renderCamStream();
    } catch (error) {
      console.log(error);
    }
  } else {
    // gl = outputcanvas.getContext("2d");
    backgroundImageSource.src = '';
    continueAnimating = false;
    continueinputvideo = true;
    backgroundType = "none";
    await videoCanvasOnFrame();
  }
}