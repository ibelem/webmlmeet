const inputvideo_owt = $("#inputvideo_owt")[0]
const inputvideo_mp = $("#inputvideo_mp")[0]
let conference = new Owt.Conference.ConferenceClient()
let room, myid
let stream, processedstream
let localStream
let publicationGlobal
let isSelf
let resolution = { width: 1280, height: 720 }
let avTrackConstraint = {
  audio: {
    source: "mic",
  },
  video: {
    resolution: new Owt.Base.Resolution(1280, 720),
    frameRate: 24,
    source: "camera",
  },
}

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

const screateMPStream = () => {
  const camera = new Camera(inputvideo_mp, {
    onFrame: async () => {
      await selfieSegmentation.send({ image: inputvideo_mp })
    },
    width: 1280,
    height: 720,
  })

  camera.start()

//   stream = document.querySelector("#inputvideo_mp").srcObject

//   console.log(stream)
  
  processedstream = document.querySelector("#outputcanvas").captureStream()
  const audiotrack = stream.getAudioTracks()[0]
  processedstream.addTrack(audiotrack)
}

const subscribeVideo = (remotestream) => {
  console.log("---- subscribeVideo ----")
  console.log("---- remotestream.id ----")
  console.log(remotestream.id)

  const subscribeOption = {
    audio: true,
    video: resolution,
  }

  conference.subscribe(remotestream, subscribeOption).then(
    (subscription) => {
      let $video = $(
        `<video autoplay id=${remotestream.id} style="display:block" >this browser does not supported video tag</video>`
      )
      $video.get(0).srcObject = remotestream.mediaStream
      $("#video-panel").append($video)
    },
    (err) => {
      console.log("subscribe failed", err)
    }
  )

  remotestream.addEventListener("ended", () => {
    $(`#${remotestream.id}`).remove()
    $(`#${remotestream.id}resolutions`).remove()
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
  publicationGlobal.stop()
  location.reload()
}

const onewebMeet = async () => {
  await createOWTStream()
  screateMPStream()

  console.log("---- stream ----")
  console.log(stream)
  console.log("---- processedstream ----")
  console.log(processedstream)

  publishStream()
}