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
    // ctx2.drawImage(inputvideo, 0, 0, cW2, cH2);
    ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGB, ctx.RGB, ctx.UNSIGNED_BYTE, inputvideo);
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
  ctx = $("#outputcanvas")[0].getContext("webgl2");
  await initRenderer(effect)
  continueinputvideo = true
  videoCanvasOnFrame();
  getProcessedStream();
  initConference();
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
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
    continueAnimating = false;
    continueinputvideo = true
    // videoCanvasOnFrame()
  }
}