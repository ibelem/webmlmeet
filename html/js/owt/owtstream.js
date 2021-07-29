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

const videoCanvasOnFrame = () => {
  if(continueinputvideo)
  {
    window.requestAnimationFrame(videoCanvasOnFrame);
    ctx.drawImage(inputvideo, 0, 0, cW, cH);
  }
}

const initRenderer = (effect) => {
  renderer = new Renderer(outputcanvas);
  if(effect === "blur") {
    renderer.blurRadius = 5
  }
  // renderer.refineEdgeRadius = 10
  renderer.effect = effect
  renderer.setup();
}

const oneWebMeetOWT = async () => {
  await createOWTStream()
  // ctx = $("#outputcanvas")[0].getContext("2d");
  continueinputvideo = true
  // videoCanvasOnFrame();
  getProcessedStream();
  console.log(stream)
  initConference();
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    console.log('dddddddddddddddddddddddd')
    ctx = $("#outputcanvas")[0].getContext("webgl2");
    console.log(ctx)
    await initRenderer(effect)
    console.log(isSS + ' ' + effect)
    if(effect === "blur") {
      renderer.blurRadius = 5
    }
    // renderer.refineEdgeRadius = 10
    renderer.effect = effect
    continueAnimating = true
    continueinputvideo = false
    await ss()
    
  } else {
    ctx = $("#outputcanvas")[0].getContext("2d");
    continueAnimating = false;
    continueinputvideo = true
    videoCanvasOnFrame()
  }
}