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
  getProcessedStream();
  initConference();
  userMarquee();
  await ssLoad();
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