// const inputvideo_owt = $("#inputvideo_owt")[0]
const inputvideo_mp = $("#inputvideo_mp")[0]
const canvasCtx = $("#outputcanvas")[0].getContext("2d")
let cW = $("#outputcanvas")[0].width
let cH = $("#outputcanvas")[0].height
let camera,
  isbr = false,
  isfd = false,
  isfm = false,
  ish = false

let conference = new Owt.Conference.ConferenceClient()
let room, myid
let processedstream
let localStream
let publicationGlobal
let isSelf
let avTrackConstraint = {
  audio: {
    source: "mic",
  },
  video: {
    resolution: resolution,
    frameRate: 24,
    source: "camera",
  },
}

const initConference = () => {
  resolution = { width: 320, height: 240 }
  if ($("#login-480").hasClass("selected")) {
    resolution = { width: 640, height: 480 }
  } else if ($("#login-720").hasClass("selected")) {
    resolution = { width: 1280, height: 720 }
  }
  if (resolution.width == 1280) {
    $("#hd").css("display", "inline-block")
  } else {
    $("#hd").css("display", "none")
  }
}

const subscribeVideo = (remotestream) => {
  console.log(remotestream.id)

  const subscribeOption = {
    audio: true,
    video: resolution,
  }

  conference.subscribe(remotestream, subscribeOption).then(
    (subscription) => {
      let $video = $(
        `
        <div class="vslot" id=${"div" + remotestream.id}>
          <video autoplay id=${"v" + remotestream.id} style="display:block" >this browser does not supported video tag</video>
        </div>
        `
      )
      $("#video-panel").append($video)
      let vid = "#v" + remotestream.id
      document.querySelector(vid).srcObject = remotestream.mediaStream
    },
    (err) => {
      console.log("subscribe failed", err)
    }
  )

  remotestream.addEventListener("ended", () => {
    $(`#div${remotestream.id}`).remove()
  })

  remotestream.addEventListener("updated", () => {
    //
  })
}

conference.addEventListener("streamadded", (event) => {
  console.log("A new stream is added ", event.stream.id)
  isSelf = isSelf ? isSelf : event.stream.id != publicationGlobal.id

  console.log(isSelf)
  console.log("---- event.stream.id ----")
  console.log(event.stream.id)

  console.log("---- publicationGlobal.id ----")
  console.log(publicationGlobal.id)

  isSelf && subscribeVideo(event.stream)
  mixStream(room, event.stream.id, "common")
  event.stream.addEventListener("ended", () => {
    console.log(event.stream.id + " is ended.")
  })
})

const publishStream = () => {
  createToken(room, "user", "presenter", function (response) {
    let token = response
    conference.join(token).then((resp) => {
      // myid = resp.self.id
      room = resp.id

      let streams = resp.remoteStreams
      for (const stream of streams) {
        if (stream.source.audio !== "mixed") {
          subscribeVideo(stream)
        }
      }
      console.log("Streams in conference:", streams.length)
      console.log("Participants in conference: " + resp.participants.length)
      console.log("Participants: ")
      console.log(resp.participants)

      // document.querySelector("#pnumber").innerHTML = resp.participants.length

      localStream = new Owt.Base.LocalStream(
        processedstream,
        new Owt.Base.StreamSourceInfo("mic", "camera")
      )

      conference.publish(localStream).then((publication) => {
        publicationGlobal = publication
        mixStream(room, publication.id, "common")
        publication.addEventListener("error", (err) => {
          console.log("Publication error: " + err.error.message)
        })
      })
    })
  })
}

const userExit = () => {
  if (localStream) {
    localStream.mediaStream.getTracks().forEach((track) => {
      track.stop()
    })
  }
  localStream = undefined
  conference.leave()
  console.log("-- publicationGlobal --")
  console.log(publicationGlobal)
  publicationGlobal.stop()
  location.reload()
}

// const createOWTStream = async () => {
//   stream = await Owt.Base.MediaStreamFactory.createMediaStream(
//     avTrackConstraint
//   )
//   if ("srcObject" in inputvideo_owt) {
//     inputvideo_owt.srcObject = stream
//   } else {
//     inputvideo_owt.src = URL.createObjectURL(stream)
//   }

//   inputvideo_owt.autoplay = true
// }

const mpfeatures = async () => {
  if (isbr) {
    await selfieSegmentation.send({ image: inputvideo_mp })
  }
  // else if(isfd) {
  //   await faceDetection.send({ image: inputvideo_mp })
  // }
  else if (isfm) {
    await faceMesh.send({ image: inputvideo_mp })
  } else if (ish) {
    await holistic.send({ image: inputvideo_mp })
  } else {
    await selfieSegmentation.send({ image: inputvideo_mp })
  }
}

const initStream = () => {
  camera = new Camera(inputvideo_mp, {
    onFrame: async () => {
      await mpfeatures()
    },
    onSourceChanged: () => {
      selfieSegmentation.reset()
    },
    width: resolution.width,
    height: resolution.height,
  })
}

const getProcessedStream = () => {
  processedstream = document.querySelector("#outputcanvas").captureStream()
  const audiotrack = stream.getAudioTracks()[0]
  processedstream.addTrack(audiotrack)
}

let activeEffect = "background"
const bg = document.querySelector("#bgdefault")
const bgfilebutton = document.querySelector("#bgimg")

$(".bgselector").each(function () {
  $(this).on("click", function (e) {
    bg.src = e.target.src
  })
})

bgfilebutton.addEventListener(
  "change",
  (e) => {
    const files = e.target.files
    if (files.length > 0) {
      bg.src = URL.createObjectURL(files[0])
    }
  },
  false
)

function onBRResults(results) {
  if (!isbr) {
    canvasCtx.drawImage(results.image, 0, 0, cW, cH)
  } else {
    fpsControl.tick()
    canvasCtx.save()
    canvasCtx.clearRect(0, 0, cW, cH)
    canvasCtx.drawImage(results.segmentationMask, 0, 0, cW, cH)

    // Only overwrite existing pixels.
    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = "source-in"
    if (activeEffect === "mask" || activeEffect === "both") {
      // This can be a color or a texture or whatever...
      canvasCtx.fillStyle = fillColor
      canvasCtx.fillRect(0, 0, cW, cH)
    } else {
      canvasCtx.drawImage(results.image, 0, 0, cW, cH)
    }

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = "destination-atop"
    if (activeEffect === "background" || activeEffect === "both") {
      // This can be a color or a texture or whatever...
      //   canvasCtx.fillStyle = fillColor
      //   canvasCtx.fillRect(0, 0, cW, cH)
      canvasCtx.drawImage(bg, 0, 0, cW, cH)
    } else {
      canvasCtx.drawImage(results.image, 0, 0, cW, cH)
    }

    canvasCtx.restore()
  }
}

const selfieSegmentation = new SelfieSegmentation({
  locateFile: (file) => {
    console.log(file)
    return `./js/mediapipe/model/selfie_segmentation/${file}`
  },
})

selfieSegmentation.setOptions({
  modelSelection: 1,
})

selfieSegmentation.onResults(onBRResults)

function onFMResults(results) {
  fpsControl.tick()
  canvasCtx.save()
  canvasCtx.clearRect(0, 0, cW, cH)
  canvasCtx.drawImage(results.image, 0, 0, cW, cH)
  if (results.multiFaceLandmarks) {
    for (const landmarks of results.multiFaceLandmarks) {
      drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {
        color: "#C0C0C070",
        lineWidth: 1,
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {
        color: "#FF3030",
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {
        color: "#FF3030",
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {
        color: "#30FF30",
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {
        color: "#30FF30",
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {
        color: "#E0E0E0",
      })
      drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: "#E0E0E0" })
    }
  }
  canvasCtx.restore()
}

const faceMesh = new FaceMesh({
  locateFile: (file) => {
    return `./js/mediapipe/model/face_mesh/${file}`
  },
})
faceMesh.setOptions({
  maxNumFaces: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
})
faceMesh.onResults(onFMResults)

function onHResults(results) {
  fpsControl.tick()
  canvasCtx.save()
  canvasCtx.clearRect(0, 0, cW, cH)
  canvasCtx.drawImage(results.image, 0, 0, cW, cH)
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {
    color: "#00FF00",
    lineWidth: 4,
  })
  drawLandmarks(canvasCtx, results.poseLandmarks, {
    color: "#FF0000",
    lineWidth: 2,
  })
  drawConnectors(canvasCtx, results.faceLandmarks, FACEMESH_TESSELATION, {
    color: "#C0C0C070",
    lineWidth: 1,
  })
  drawConnectors(canvasCtx, results.leftHandLandmarks, HAND_CONNECTIONS, {
    color: "#CC0000",
    lineWidth: 5,
  })
  drawLandmarks(canvasCtx, results.leftHandLandmarks, {
    color: "#00FF00",
    lineWidth: 2,
  })
  drawConnectors(canvasCtx, results.rightHandLandmarks, HAND_CONNECTIONS, {
    color: "#00CC00",
    lineWidth: 5,
  })
  drawLandmarks(canvasCtx, results.rightHandLandmarks, {
    color: "#FF0000",
    lineWidth: 2,
  })
  canvasCtx.restore()
}

const holistic = new Holistic({
  locateFile: (file) => {
    return `./js/mediapipe/model/holistic/${file}`
  },
})

holistic.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
})

holistic.onResults(onHResults)

// function onFDResults(results) {
//   // Draw the overlays.
//   canvasCtx.save()
//   canvasCtx.clearRect(0, 0, cW, cH)
//   canvasCtx.drawImage(
//       results.image, 0, 0, cW, cH)
//   if (results.detections.length > 0) {
//     drawingUtils.drawRectangle(
//         canvasCtx, results.detections[0].boundingBox,
//         {color: 'blue', lineWidth: 4, fillColor: '#00000000'})
//     drawingUtils.drawLandmarks(canvasCtx, results.detections[0].landmarks, {
//       color: 'red',
//       radius: 5,
//     })
//   }
//   canvasCtx.restore()
// }

// const faceDetection = new FaceDetection({locateFile: (file) => {
//   return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4/${file}`
// }})
// faceDetection.setOptions({
//   modelSelection: 0,
//   minDetectionConfidence: 0.5
// })
// faceDetection.onResults(onFDResults)

const controls = window
const fpsControl = new controls.FPS()
const controlsElement = document.querySelector("#control-panel")

new controls.ControlPanel(controlsElement).add([fpsControl])

const onewebMeet = async () => {
  // await createOWTStream()
  initConference()
  initStream()
  await camera.start()
  getProcessedStream()
  publishStream()
}
