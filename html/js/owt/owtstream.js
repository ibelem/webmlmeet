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
let gl

const videoCanvasOnFrame = () => {
  if(continueinputvideo)
  {
    window.requestAnimationFrame(videoCanvasOnFrame);
    // ctx2d.drawImage(inputvideo, 0, 0, cW, cH);
    // renderer.uploadNewTexture(inputvideo, [cW, cH]);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      inputvideo
    );
    gl.drawArrays(gl.TRIANGLES, 0, 6);
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
  await initRenderer("none")
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
    await initRenderer("fill")
    videoCanvasOnFrame()

    // deleteStream(roomId, localPublication.id)
    // createLocal();
  }
}