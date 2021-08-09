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
    if(stream) {
      renderer.uploadNewTexture(inputvideo, [cW, cH]);
      renderer.utils.render();
      // gl.texImage2D(
      //   gl.TEXTURE_2D,
      //   0,
      //   gl.RGBA,
      //   gl.RGBA,
      //   gl.UNSIGNED_BYTE,
      //   inputvideo
      // );
      // gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }
}

const initRenderer = (effect) => {
  renderer = new Renderer(outputcanvas);
  renderer.effect = effect
  renderer.setup();
}

const oneWebMeetOWT = async () => {
  await createOWTStream()
  await initRenderer("none")
  continueinputvideo = true
  videoCanvasOnFrame();
  // getProcessedStream();
  // initConference();
  // userMarquee();
};


const ssConfig = async (isSS, effect) => {
  if(isSS && effect) {
    continueinputvideo = false
    console.log(isSS + ' ' + effect)
    if(effect === "blur") {
      renderer.blurRadius = 10
    }

    renderer.effect = effect 
    continueAnimating = true    
    await ss()
    // deleteStream(roomId, localPublication.id)
    // createLocal();
  } else {
    // gl = outputcanvas.getContext("2d");
    continueAnimating = false;
    continueinputvideo = true
    renderer.deleteAll()
    await initRenderer("none")
    videoCanvasOnFrame()

    // deleteStream(roomId, localPublication.id)
    // createLocal();
  }
}