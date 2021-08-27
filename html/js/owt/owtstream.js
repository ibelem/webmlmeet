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
const videoCanvasOnFrame = async () => {
  if(continueinputvideo) {
    window.requestAnimationFrame(videoCanvasOnFrame);
    // ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
    if(stream) {
      const pipeline = buildWebGL2Pipeline(
        inputvideo,
        backgroundImageSource,
        backgroundType,
        [321, 321],
        outputcanvas
      );
      await pipeline.render();
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
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    backgroundType = effect;
    continueAnimating = true    
    await ss()
  } else {
    // gl = outputcanvas.getContext("2d");
    continueAnimating = false;
    continueinputvideo = true
    backgroundType = "blur"
    await videoCanvasOnFrame()
  }
}