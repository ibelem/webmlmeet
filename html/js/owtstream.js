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

// const videoCanvasOnFrame = () => {
//   window.requestAnimationFrame(videoCanvasOnFrame);
//   // ctx2.drawImage(inputvideo, 0, 0, cW2, cH2);
// }


const initRenderer = (effect) => {
  ctx = $("#outputcanvas")[0].getContext("webgl2");
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
  initRenderer(effect)
  // videoCanvasOnFrame();
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
    await ss()
    
  } else {
    console.log('+++++++++++ ' + isSS + ' ' + effect + ' +++++++++++')
    console.log(rafReq)
    // cancelAnimationFrame(rafReq)
    continueAnimating = false;
    // videoCanvasOnFrame()
  }
  getProcessedStream();
}