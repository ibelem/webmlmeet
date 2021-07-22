const createOWTStream = async () => {
  stream = await Owt.Base.MediaStreamFactory.createMediaStream(
    avTrackConstraint
  )
  console.log(stream)
  console.log(inputvideo)
  if ("srcObject" in inputvideo) {
    inputvideo.srcObject = stream
  } else {
    inputvideo.src = URL.createObjectURL(stream)
  }

  inputvideo.autoplay = true
  console.log(inputvideo.srcObject)
}

function videtoCanvasOnFrame() {
  window.requestAnimationFrame(videtoCanvasOnFrame);
  ctx2.drawImage(inputvideo, 0, 0, cW, cH);
}

const initRenderer = (effect) => {
  renderer = new Renderer(outputcanvas2);
  renderer.refineEdgeRadius = 8
  renderer.blurRadius = 20
  renderer.effect = effect
  renderer.setup();
}

const oneWebMeetOWT = async () => {

  await createOWTStream()

  if(isSS) {
  // initRenderer("blur")
  // await ss()
  } else {
    videtoCanvasOnFrame()
  }

  getProcessedStream();
  initConference();
};