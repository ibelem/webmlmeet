const createOWTStream = async () => {
  stream = await Owt.Base.MediaStreamFactory.createMediaStream(
    avTrackConstraint
  )
  if ("srcObject" in inputvideo_owt) {
    inputvideo_owt.srcObject = stream
  } else {
    inputvideo_owt.src = URL.createObjectURL(stream)
  }

  inputvideo_owt.autoplay = true
}