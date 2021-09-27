let instanceType = "deeplabtflite";
let isFirstTimeLoad = true;
let loadTime = 0;
let buildTime = 0;
let computeTime = 0;
let outputDimensions = [1,321, 321, 21];

let inputOptions = {
  mean: [127.5, 127.5, 127.5],
  std: [127.5, 127.5, 127.5],
  scaledFlag: false,
  inputLayout: 'nhwc',
  inputDimensions: [1, 321, 321, 3], // deeplab
  inputResolution: [321, 321]
};

let outputBuffer;
let continueinputvideo = true

const pipeline2 = buildWebGL2Pipeline(
  inputvideo,
  backgroundImageSource,
  "none",
  [321, 321],
  outputcanvas,
  null
);

function stopCamera() {
  stream.getTracks().forEach((track) => {
    if (track.readyState === 'live' && track.kind === 'video') {
      track.stop();
    }
  });
}

async function renderCamStream() {
  const inputBuffer = getInputTensor(inputvideo, inputOptions);
  let obj = {
    task: 'nncompute',
    value: inputBuffer
  }
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
    jointBilateralFilter: {sigmaSpace: 1, sigmaColor: 0.1},
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
  )
  console.log(inputvideo)
  if ("srcObject" in inputvideo) {
    inputvideo.srcObject = stream
  } else {
    inputvideo.src = URL.createObjectURL(stream)
  }

  inputvideo.autoplay = true
  console.log(inputvideo.srcObject)
}

const videoCanvasOnFrame = async () => {
  if(continueinputvideo) {
    window.requestAnimationFrame(videoCanvasOnFrame);
    // ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
    if(stream) {
      const postProcessingConfig2 = {
        smoothSegmentationMask: true,
        jointBilateralFilter: {sigmaSpace: 1, sigmaColor: 0.1},
        coverage: [0.5, 0.75],
        lightWrapping: 0.3,
        blendMode: 'screen',
      }
      pipeline2.updatePostProcessingConfig(postProcessingConfig2);
      await pipeline2.render();
    }
  }
}

let worker;
worker = new Worker('../js/tflite/deeplab/webnn/webnnworker.js');

const oneWebMeetOWT = async () => {
  await createOWTStream()
  backgroundType = "blur"
  continueinputvideo = true
  await videoCanvasOnFrame();
  getProcessedStream();
  initConference();
  userMarquee();
  // ssLoad();

  let obj = {
    task: 'nnwarmup',
    value: null
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
    console.log('Msg from worker: ', e.data)
    outputBuffer = e.data;
    await drawOutput(outputBuffer, inputvideo);

  console.log('- Computing... ');
  const start = performance.now();
  computeTime = (performance.now() - start).toFixed(2);
  console.log(`  done in ${computeTime} ms.`);
  // await drawOutput(outputBuffer, inputvideo);

  if(continueAnimating)
  {
    rafReq = requestAnimationFrame(renderCamStream);
    spaninference.html(computeTime)
    let ct = parseInt(computeTime)
    $("#fps").html((1000/ct).toFixed(0))
  }
}

});

const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    backgroundImageSource.src = '../../assets/img/ssbg/0.jpg'
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    backgroundType = effect;
    continueAnimating = true

    try {
      inputvideo.onloadedmediadata = await renderCamStream();
    } catch (error) {
      console.log(error);
    }
  } else {
    // gl = outputcanvas.getContext("2d");
    backgroundImageSource.src = '';
    continueAnimating = false;
    continueinputvideo = true
    backgroundType = "none"
    await videoCanvasOnFrame()
  }
}