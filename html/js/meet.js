// const inputvideo_owt = $("#inputvideo_owt")[0]
const inputvideo_mp = $("#inputvideo_mp")[0];
const canvasCtx = $("#outputcanvas")[0].getContext("2d");
let cW = $("#outputcanvas")[0].width;
let cH = $("#outputcanvas")[0].height;
let camera,
  isbr = false;

let conference = new Owt.Conference.ConferenceClient();
let room, myid;
let processedstream;
let localStream;
let publicationGlobal;
let isSelf;
let avTrackConstraint = {
  audio: {
    source: "mic",
  },
  video: {
    resolution: resolution,
    frameRate: 24,
    source: "camera",
  },
};

const initConference = () => {
  resolution = { width: 320, height: 240 };
  if ($("#login-480").hasClass("selected")) {
    resolution = { width: 640, height: 480 };
  } else if ($("#login-720").hasClass("selected")) {
    resolution = { width: 1280, height: 720 };
  }
};

const subscribeVideo = (remotestream) => {
  console.log(remotestream.id);

  const subscribeOption = {
    audio: true,
    video: resolution,
  };

  conference.subscribe(remotestream, subscribeOption).then(
    (subscription) => {
      let $video = $(
        `<video autoplay id=${remotestream.id} style="display:block" >this browser does not supported video tag</video>`
      );
      $video.get(0).srcObject = remotestream.mediaStream;
      $("#video-panel").append($video);
    },
    (err) => {
      console.log("subscribe failed", err);
    }
  );

  remotestream.addEventListener("ended", () => {
    $(`#${remotestream.id}`).remove();
    $(`#${remotestream.id}resolutions`).remove();
  });

  remotestream.addEventListener("updated", () => {
    //
  });
};

conference.addEventListener("streamadded", (event) => {
  console.log("A new stream is added ", event.stream.id);
  isSelf = isSelf ? isSelf : event.stream.id != publicationGlobal.id;

  console.log(isSelf);
  console.log("---- event.stream.id ----");
  console.log(event.stream.id);

  console.log("---- publicationGlobal.id ----");
  console.log(publicationGlobal.id);

  isSelf && subscribeVideo(event.stream);
  mixStream(room, event.stream.id, "common");
  event.stream.addEventListener("ended", () => {
    console.log(event.stream.id + " is ended.");
  });
});

const publishStream = () => {
  createToken(room, "user", "presenter", function (response) {
    let token = response;
    conference.join(token).then((resp) => {
      // myid = resp.self.id
      room = resp.id;

      let streams = resp.remoteStreams;
      for (const stream of streams) {
        if (stream.source.audio !== "mixed") {
          subscribeVideo(stream);
        }
      }
      console.log("Streams in conference:", streams.length);
      console.log("Participants in conference: " + resp.participants.length);
      console.log("Participants: ");
      console.log(resp.participants);

      localStream = new Owt.Base.LocalStream(
        processedstream,
        new Owt.Base.StreamSourceInfo("mic", "camera")
      );

      conference.publish(localStream).then((publication) => {
        publicationGlobal = publication;
        mixStream(room, publication.id, "common");
        publication.addEventListener("error", (err) => {
          console.log("Publication error: " + err.error.message);
        });
      });
    });
  });
};

const userExit = () => {
  if (localStream) {
    localStream.mediaStream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  localStream = undefined;
  conference.leave();
  console.log("-- publicationGlobal --");
  console.log(publicationGlobal);
  publicationGlobal.stop();
  location.reload();
};

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

const initStream = () => {
  camera = new Camera(inputvideo_mp, {
    onFrame: async () => {
      await selfieSegmentation.send({ image: inputvideo_mp });
    },
    width: resolution.width,
    height: resolution.height,
  });
};

const getProcessedStream = () => {
  processedstream = document.querySelector("#outputcanvas").captureStream();
  const audiotrack = stream.getAudioTracks()[0];
  processedstream.addTrack(audiotrack);
};

let activeEffect = "background";
const fillColor = "rgba(204, 255, 144, 1.0)";
const bg = document.querySelector("#bgdefault");
const bgfilebutton = document.querySelector("#bgimg");
 
$('.bgselector').each(function() {
    $(this).on("click", function(e) {
        bg.src = e.target.src
    })
})

bgfilebutton.addEventListener(
  "change",
  (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      bg.src = URL.createObjectURL(files[0]);
    }
  },
  false
)

function onResults(results) {
  if (!isbr) {
    canvasCtx.drawImage(results.image, 0, 0, cW, cH);
  } else {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, cW, cH);
    canvasCtx.drawImage(results.segmentationMask, 0, 0, cW, cH);

    // Only overwrite existing pixels.
    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = "source-in";
    if (activeEffect === "mask" || activeEffect === "both") {
      // This can be a color or a texture or whatever...
      canvasCtx.fillStyle = fillColor;
      canvasCtx.fillRect(0, 0, cW, cH);
    } else {
      canvasCtx.drawImage(results.image, 0, 0, cW, cH);
    }

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = "destination-atop";
    if (activeEffect === "background" || activeEffect === "both") {
      // This can be a color or a texture or whatever...
      //   canvasCtx.fillStyle = fillColor
      //   canvasCtx.fillRect(0, 0, cW, cH)
      canvasCtx.drawImage(bg, 0, 0, cW, cH);
    } else {
      canvasCtx.drawImage(results.image, 0, 0, cW, cH);
    }

    canvasCtx.restore();
  }
}

const selfieSegmentation = new SelfieSegmentation({
  locateFile: (file) => {
    console.log(file);
    return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
  },
});

selfieSegmentation.setOptions({
  modelSelection: 1,
});

selfieSegmentation.onResults(onResults);

const onewebMeet = async () => {
  // await createOWTStream()
  initConference();
  initStream();
  await camera.start();
  getProcessedStream();
  publishStream();
};
