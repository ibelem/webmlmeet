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

const outputcanvas2d = $("#outputcanvas2d")[0];
let cW2d = $("#outputcanvas2d")[0].width;
let cH2d = $("#outputcanvas2d")[0].height;
let ctx2d;
let continueinputvideo = true

const videoCanvasOnFrame = () => {
  if(continueinputvideo)
  {
    window.requestAnimationFrame(videoCanvasOnFrame);
    ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
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
  ctx2d = outputcanvas2d.getContext("2d");
  continueinputvideo = true
  videoCanvasOnFrame();
  // getProcessedStream();
  processedstream = stream
  initConference();
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    continueinputvideo = false
    await initRenderer(effect)
    console.log(isSS + ' ' + effect)
    if(effect === "blur") {
      renderer.blurRadius = 5
    }
    // renderer.refineEdgeRadius = 10
    renderer.effect = effect
    continueAnimating = true    
    await ss()
    getProcessedStream();
    deleteStream(roomId, localPublication.id)
    createLocal();
  } else {
    // gl = outputcanvas.getContext("2d");
    continueAnimating = false;
    continueinputvideo = true
    videoCanvasOnFrame()
    processedstream = stream
    deleteStream(roomId, localPublication.id)
    createLocal();
  }
}