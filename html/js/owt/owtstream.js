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
    // ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
    renderer.uploadNewTexture(inputvideo, [cW, cH]);
    renderer.utils.render();
  }
}

const canvasOnFrame = () => {
  if(continueAnimating)
  {
    window.requestAnimationFrame(canvasOnFrame);
    renderer.uploadNewTexture(inputvideo, [cW, cH]);
    renderer.utils.render();
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
  await initRenderer("fill")
  continueinputvideo = true
  videoCanvasOnFrame();
  getProcessedStream();
  // processedstream = stream
  initConference();
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    if(effect === "blur") {
      renderer.blurRadius = 5
    }
    // renderer.refineEdgeRadius = 10
    renderer.effect = effect
    continueAnimating = true    
    await ss()


    // deleteStream(roomId, localPublication.id)
    // createLocal();
  } else {
    // gl = outputcanvas.getContext("2d");
    continueAnimating = false;
    continueinputvideo = true
    videoCanvasOnFrame()

    // deleteStream(roomId, localPublication.id)
    // createLocal();
  }
}