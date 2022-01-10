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

let continueinputvideo = true

const pipeline2 = buildWebGL2Pipeline(
  inputvideo,
  backgroundImageSource,
  "none",
  [321, 321],
  outputcanvas,
  null
);

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


const oneWebMeetOWT = async () => {
  await createOWTStream()
  backgroundType = "blur"
  continueinputvideo = true
  await videoCanvasOnFrame();

  if (location.pathname.indexOf('ort-dl')>-1) {
    await nsLoad();
    getProcessedStream();
    await originalAudio();
    // await denoise();
    initConference();
  } else {
    initConference();
    getProcessedStream();
  }

  userMarquee();
  ssLoad();


  // if(parsePathnameBackend().toLowerCase() === 'webnn' && parseSearchParams("ds") === "1") {
  //   console.log("^^^^^^^^^^^^^^^^^ WIN ^^^^^^^^^^^^^^^^^^^^")
  //   let worker = new Worker('../js/tflite/deeplab/webnn/webnnworker.js');
  //   worker.addEventListener('message', (e) => {
  //     const { msg } = e.data;
  //     $("#worker").html(msg);
  //   });
  // } else {
  //   ssLoad();
  // }
};

const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    backgroundImageSource.src = '../../assets/img/ssbg/0.jpg'
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    backgroundType = effect;
    continueAnimating = true
    await ssCompute()
  } else {
    // gl = outputcanvas.getContext("2d");
    backgroundImageSource.src = '';
    continueAnimating = false;
    continueinputvideo = true
    backgroundType = "none"
    await videoCanvasOnFrame()
  }
}