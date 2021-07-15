// const inputvideo_owt = $("#inputvideo_owt")[0]
const inputvideo_mp = $("#inputvideo_mp")[0];
const ctx = $("#outputcanvas")[0].getContext("2d");
let cW = $("#outputcanvas")[0].width;
let cH = $("#outputcanvas")[0].height;
let camera,
  isbr = false,
  isbb = false,
  isfd = false,
  isfm = false,
  ish = false,
  isbeauty = false;
let ss = 0
let ssmodelinfo = [{
    id: 0,
    name: 'Selfie Segmentation',
    inputsize: '256x256x3 (HWC)',
    outputsize: '256x256x1',
    size: '249.0kB',
    basedon: 'MobileNetV3',
    format: 'TFLite'
  },{
    id: 1,
    name: 'Selfie Segmentation Landscape',
    inputsize: '144x256x3 (HWC)',
    outputsize: '256x256x1',
    size: '249.8kB',
    basedon: 'MobileNetV3',
    format: 'TFLite'
  }
]

let isfullscreen = false

let room = null;
let roomId, myid;
let processedstream;
let localStream;
let localPublication = null;
let subList = {};
let screenSub = null
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
let isPauseAudio = true;
let isPauseVideo = false;
let isAudioOnly = false;

let localScreen, localScreenId, localScreenPubliction;
let isScreenSharing = false;
let remoteScreen = null;
let remoteScreenName = null;

let localId = null;
let users = [];

let localName = "user";
let start, end, delta;
let spaninference = $("#spaninference")

const initConference = () => {
  resolution = { width: 320, height: 240 };
  if ($("#login-480").hasClass("selected")) {
    resolution = { width: 640, height: 480 };
  } else if ($("#login-720").hasClass("selected")) {
    resolution = { width: 1280, height: 720 };
  }
  if (resolution.width == 1280) {
    $("#hd").css("display", "inline-block");
  } else {
    $("#hd").css("display", "none");
  }

  let createLocal = () => {
    console.log('dddd')

    localStream = new Owt.Base.LocalStream(
      processedstream,
      new Owt.Base.StreamSourceInfo("mic", "camera")
    );
  
    localId = localStream.id;
    room.publish(localStream).then((publication) => {
      localPublication = publication;
      isPauseAudio = false;
      toggleAudio();
      isPauseVideo = true;
      toggleVideo();
      mixStream(roomId, localPublication.id, "common");
      console.info('publish success');
      publication.addEventListener("error", (err) => {
        console.log("Publication error: " + err.error.message);
      });
    });
  }

  createToken(roomId, localName, "presenter", function (response) {
    console.log('createToken0')
    let token = response;
    console.log(token)
    if (!room) {
      room = new Owt.Conference.ConferenceClient();
      addRoomEventListener();
    }
    console.log('createToken1')
    console.log(room)
    room.join(token).then(resp => {
      // myid = resp.self.id
      console.log('createToken2')
      roomId = resp.id;
      let getLoginUsers = resp.participants;
      let streams = resp.remoteStreams;
      console.log(users)
      getLoginUsers.map(function(participant){
        participant.addEventListener('left', () => {
          //TODO:send message for notice everyone the participant has left maybe no need
          deleteUser(participant.id);
        });
        users.push({
          id: participant.id,
          userId: participant.userId,
          role: participant.role
        });
        console.log(users)
      });
      loadUserList();
      createLocal();

      console.log(streams)

      for (const stream of streams) {
        console.log("stream.source.video: " + stream.source.video)
        if (stream.source.audio !== "mixed" || stream.source.video === 'screen-cast' ) {
          
          console.log("stream.source.video:" + stream.source.video)
          subscribeStream(stream);
        }
      }

      // console.log("Streams in conference:", streams.length);
      // console.log("Participants in conference: " + resp.participants.length);
      // console.log("Participants: ");
      // console.log(resp.participants);

      // document.querySelector("#pnumber").innerHTML = resp.participants.length
    }, err => {
      console.log("server connect failed: " + err);
      if (err.message.indexOf('connect_error:') >= 0) {
        const signalingHost = err.message.replace('connect_error:', '');
        alertCert(signalingHost);
      }
    });
  });
};

const toggleVideo = () => {
  if (!localPublication || isAudioOnly) {
    return;
  }

  if (!isPauseVideo) {
    //TODO: pause all video?
    //remoteMixedSub.mute(Owt.Base.TrackKind.VIDEO);
    for (var temp in subList) {
      if (subList[temp] === screenSub) {
        continue;
      }
      subList[temp].mute(Owt.Base.TrackKind.VIDEO);
    }
    localStream.mediaStream.getVideoTracks()[0].enabled = false;
    localPublication.mute(Owt.Base.TrackKind.VIDEO).then(
      () => {
        console.info("mute video");
        isPauseVideo = !isPauseVideo;
      },
      (err) => {
        console.error("mute video failed");
      }
    );
  } else {
    //remoteMixedSub.unmute(Owt.Base.TrackKind.VIDEO);
    for (var temp in subList) {
      if (subList[temp] === screenSub) {
        continue;
      }
      subList[temp].unmute(Owt.Base.TrackKind.VIDEO);
    }
    localStream.mediaStream.getVideoTracks()[0].enabled = true;
    localPublication.unmute(Owt.Base.TrackKind.VIDEO).then(
      () => {
        console.info("unmute video");
        isPauseVideo = !isPauseVideo;
      },
      (err) => {
        console.error("unmute video failed");
      }
    );
  }
}

const toggleAudio = () => {
  if (!localPublication) {
    return;
  }

  if (!isPauseAudio) {
    localPublication.mute(Owt.Base.TrackKind.AUDIO).then(
      () => {
        console.info('mute successfully');
        $('#pauseAudio').css({
          backgroundImage: 'url("img/mute-voice.png")',
          backgroundColor: '#ccc'
        });
        isPauseAudio = !isPauseAudio;
      },err => {
        console.error('mute failed');
        $('#pauseAudio').css({
          backgroundImage: 'url("img/audio.png")',
          backgroundColor: '#7bff7a'
        });
      }
    );
  } else {
    localPublication.unmute(Owt.Base.TrackKind.AUDIO).then(
      () => {
        console.info('unmute successfully');
        $('#pauseAudio').css({
          backgroundImage: 'url("img/audio.png")',
          backgroundColor: '#7bff7a'
        });
        isPauseAudio = !isPauseAudio;
      },err => {
        console.error('unmute failed');
        $('#pauseAudio').text("Unmute me");
      }
    );
  }
}

const subscribeStream = (remotestream) => {
  console.log("-- remotestream.source.video -- 1 --")
  console.log(remotestream.source.video)

  let videoOption = !isAudioOnly;

  room.subscribe(remotestream, {video: videoOption}).then(
    (subscription) => {
      subList[subscription.id] = subscription;
      console.log("-- remotestream.source.video -- 2 --")
      console.log(remotestream.source.video)

      if(remotestream.source.video === 'screen-cast'){
        screenSub = subscription;
        remotestream.addEventListener('ended', function(event) {
          //
        });
      }

      addVideo(remotestream)

    },
    (err) => {
      console.log("subscribe failed:");
      console.log(err);
    }
  );

  remotestream.addEventListener("ended", () => {
    $(`#div${remotestream.id}`).remove();
  });

  remotestream.addEventListener("updated", () => {
    //
  });
};

function addVideo(remotestream) {
  let $video = $(
    `
    <div class="vslot" id=${"div" + remotestream.id}>
      <video autoplay id=${
        "v" + remotestream.id
      } style="display:block" onclick="switchfullscreen(this)">this browser does not supported video tag
      </video>
      <div class="bar">
        <button type="button" class="btnfullscreen" onclick="remotefullscreen(this)">
          <svg viewBox="0 0 448 512">
            <path
              fill="currentColor"
              d="M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    `
  );
  $("#video-panel").append($video);
  let vid = "#v" + remotestream.id;
  document.querySelector(vid).srcObject = remotestream.mediaStream;
}

function getUserFromName(name) {
  for (var i = 0; i < users.length; ++i) {
    if (users[i] && users[i].userId === name) {
      return users[i];
    }
  }
  return null;
}

function getUserFromId(id) {
  console.log("id: " + id)
  for (var i = 0; i < users.length; ++i) {
    if (users[i] && users[i].id === id) {
      console.log(users[i].id + ': ' + users[i].userId + ' ' + users[i].role)
      return users[i];
    }
  }
  return null;
}

function deleteUser(id) {
  var index = 0;
  for (var i = 0; i < users.length; ++i) {
    if (users[i] && users[i].id === id) {
      index = i;
      break;
    }
  }
  users.splice(index, 1);
  // $('li').remove(":contains(" + id + ")");  
}

function loadUserList() {
  console.log('loadUserList: ')
  console.log(users)
  for (var u in users) {
    addUserListItem(users[u], true);
  }
}

function addUserListItem(user, muted) {
  var muteBtn =
    '<img src="img/mute_white.png" class="muteShow" isMuted="true"/>';
  var unmuteBtn =
    '<img src="img/unmute_white.png" class="muteShow" isMuted="false"/>';
  var muteStatus = muted ? muteBtn : unmuteBtn;
  $('#user-list').append('<li><div class="userID">' + user.id +
    '</div><img src="img/avatar.png" class="picture"/><div class="name">' +
    user.userId + '</div>' + muteStatus + '</li>');
}

function addRoomEventListener() {
  room.addEventListener("streamadded", (streamEvent) => {
    console.log("Stream added ", streamEvent);

    let stream = streamEvent.stream;
    console.log(stream);

    if (localStream && localStream.id === stream.id) {
      return;
    } else {

      console.log('localId: ' + localId + '!=='  + 'stream.id: ' + stream.id)
      console.log('localScreenId: '+ localScreenId  + '!=='  + stream.id)
      console.log('localName: '+ localName + ' !== getUserFromId(stream.origin).userId: ' + getUserFromId(stream.origin).userId)

      if (localId !== stream.id && localScreenId !== stream.id && localName !== getUserFromId(stream.origin).userId) {
        console.log('add video')
        subscribeStream(stream);
      }

    }

    // mixStream(room, stream.id, "common");
    stream.addEventListener("ended", () => {
      console.log(stream.id + " is ended.");
    });
  });

  room.addEventListener('participantjoined', (event) => {
    console.log('-----------------');
    console.log('participantjoined', event);
    console.log(event.participant.userId)
    if(event.participant.userId !== 'user' && getUserFromId(event.participant.id) === null){
      //new user
      console.log(users)
      console.log('---- new user ----')
      users.push({
        id: event.participant.id,
        userId: event.participant.userId,
        role: event.participant.role
      });
      event.participant.addEventListener('left', () => {
        if(event.participant.id !== null && event.participant.userId !== undefined){
          // sendIm(event.participant.userId + ' has left the room ', 'System');
          deleteUser(event.participant.id);
        } else {
          // sendIm('Anonymous has left the room.', 'System');
        }
      });
      console.log("join user: " + event.participant.userId);
      addUserListItem(event.participant,true);
      console.log(users)
      console.log('-----------------');
      //no need: send message to all for initId
    }
  });

  room.addEventListener('messagereceived', (event) => {
    console.log('messagereceived', event);
    var user = getUserFromId(event.origin);
    if (!user) return;
    var receivedMsg = JSON.parse(event.message);
    if(receivedMsg.type == 'msg'){
      if(receivedMsg.data != undefined) {
        var time = new Date();
        var hour = time.getHours();
        hour = hour > 9 ? hour.toString() : '0' + hour.toString();
        var mini = time.getMinutes();
        mini = mini > 9 ? mini.toString() : '0' + mini.toString();
        var sec = time.getSeconds();
        sec = sec > 9 ? sec.toString() : '0' + sec.toString();
        var timeStr = hour + ':' + mini + ':' + sec;
        var color = getColor(user.userId);
        $('<p class="' + color + '">').html(timeStr + ' ' + user.userId +'<br />')
        .append(document.createTextNode(receivedMsg.data)).appendTo('#text-content');
        $('#text-content').scrollTop($('#text-content').prop('scrollHeight'));
      }
    }
  }); 
}


const shareScreen = () => {
  let width = screen.width,
  height = screen.height;

  let screenSharingConfig = {
    audio: {
      source: "screen-cast"
    },
    video:{
      resolution:{
        "width": width,
        "height": height
      },
      frameRate: 20,
      source:'screen-cast'
    }
  }

  Owt.Base.MediaStreamFactory.createMediaStream(screenSharingConfig).then(stream => {
    localScreen = new Owt.Base.LocalStream(stream, new Owt.Base.StreamSourceInfo('screen-cast','screen-cast'));
    console.info(localScreen);
    localScreenId = localScreen.id;
    let screenVideoTracks = localScreen.mediaStream.getVideoTracks();
    for (const screenVideoTrack of screenVideoTracks) {
      screenVideoTrack.addEventListener('ended', function(e) {
        localScreenPubliction.stop();
      });
    }
    room.publish(localScreen).then((publication) => {
      console.info('-- sharescreen: publish success --');
      localScreenPubliction = publication;
    }, (err) => {
      console.error('localsreen publish failed');
    })
  }, err => {
    console.error('create localscreen failed');
  });
}

const userExit = () => {
  if (localStream) {
    localStream.mediaStream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  if (localScreen) {
    localScreen.mediaStream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  localStream = undefined;
  room.leave();
  users = [];
  subList = {};
  isAudioOnly = false;
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

const mpfeatures = async () => {
  if (isbr || isbb) {
    await selfieSegmentation.send({ image: inputvideo_mp });
  }
  // else if(isfd) {
  //   await faceDetection.send({ image: inputvideo_mp })
  // }
  else if (isfm) {
    await faceMesh.send({ image: inputvideo_mp });
  } else if (ish) {
    await holistic.send({ image: inputvideo_mp });
  } else {
    await selfieSegmentation.send({ image: inputvideo_mp });
  }
};

const initStream = () => {
  camera = new Camera(inputvideo_mp, {
    onFrame: async () => {
      await mpfeatures();
    },
    onSourceChanged: () => {
      selfieSegmentation.reset();
      faceMesh.reset();
      holistic.reset();
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

const bg = document.querySelector("#bgdefault");
const bgpause = document.querySelector("#bgpause");
const bgfilebutton = document.querySelector("#bgimg");

$(".bgselector").each(function () {
  $(this).on("click", function (e) {
    bg.src = e.target.src;
  });
});

bgfilebutton.addEventListener(
  "change",
  (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      bg.src = URL.createObjectURL(files[0]);
    }
  },
  false
);

function onBRResults(results) {
  if(isPauseVideo) {
    ctx.drawImage(bgpause, 0, 0, cW, cH);
  } else {

    if(!isbb && !isbr) {
      ctx.drawImage(results.image, 0, 0, cW, cH);
      if(isbeauty) {
        ctx.filter = "saturate(105%) brightness(120%) contrast(110%) blur(1px)"
      } else {
        ctx.filter = "saturate(100%) brightness(100%) contrast(100%) blur(0px)"
      }
    } else {

      end = performance.now()
      if(start) {
        delta = end - start
        spaninference.html(delta.toFixed(1))
      }

      fpsControl.tick();

      ctx.save();
      ctx.clearRect(0, 0, cW, cH);
      ctx.drawImage(results.segmentationMask, 0, 0, cW, cH);

      // Only overwrite existing pixels.
      ctx.globalCompositeOperation = "source-in";

      if(isbeauty) {
        ctx.filter = "saturate(110%) brightness(150%) contrast(110%) blur(1px)"
      }
      
      ctx.drawImage(results.image, 0, 0, cW, cH);
      ctx.globalCompositeOperation = "destination-atop";

      if(isbb && isbr) {
        ctx.filter = "blur(10px)"
        ctx.drawImage(bg, 0, 0, cW, cH);
      } else if (isbb) {
        ctx.filter = "blur(10px)"
        ctx.drawImage(results.image, 0, 0, cW, cH);
      } else if (isbr) {
        ctx.drawImage(bg, 0, 0, cW, cH);
      }

      ctx.restore();
      start = performance.now()
    }
  }
}

const selfieSegmentation = new SelfieSegmentation({
  locateFile: (file) => {
    return `./js/mediapipe/model/selfie_segmentation/${file}`;
  },
});

selfieSegmentation.onResults(onBRResults);

function onFMResults(results) {
  end = performance.now()
  if(start) {
    delta = end - start
    spaninference.html(delta.toFixed(1))
  }

  fpsControl.tick();
  ctx.save();
  ctx.clearRect(0, 0, cW, cH);
  ctx.drawImage(results.image, 0, 0, cW, cH);
  if (results.multiFaceLandmarks) {
    for (const landmarks of results.multiFaceLandmarks) {
      drawConnectors(ctx, landmarks, FACEMESH_TESSELATION, {
        color: "#C0C0C070",
        lineWidth: 1,
      });
      drawConnectors(ctx, landmarks, FACEMESH_RIGHT_EYE, {
        color: "#FF3030",
      });
      drawConnectors(ctx, landmarks, FACEMESH_RIGHT_EYEBROW, {
        color: "#FF3030",
      });
      drawConnectors(ctx, landmarks, FACEMESH_LEFT_EYE, {
        color: "#30FF30",
      });
      drawConnectors(ctx, landmarks, FACEMESH_LEFT_EYEBROW, {
        color: "#30FF30",
      });
      drawConnectors(ctx, landmarks, FACEMESH_FACE_OVAL, {
        color: "#E0E0E0",
      });
      drawConnectors(ctx, landmarks, FACEMESH_LIPS, { color: "#E0E0E0" });
    }
  }
  ctx.restore();
  start = performance.now()
}

const faceMesh = new FaceMesh({
  locateFile: (file) => {
    return `./js/mediapipe/model/face_mesh/${file}`;
  },
});
faceMesh.setOptions({
  maxNumFaces: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});
faceMesh.onResults(onFMResults);

function onHResults(results) {
  end = performance.now()
  if(start) {
    delta = end - start
    spaninference.html(delta.toFixed(1))
  }

  fpsControl.tick();
  ctx.save();
  ctx.clearRect(0, 0, cW, cH);
  ctx.drawImage(results.image, 0, 0, cW, cH);
  drawConnectors(ctx, results.poseLandmarks, POSE_CONNECTIONS, {
    color: "#00FF00",
    lineWidth: 4,
  });
  drawLandmarks(ctx, results.poseLandmarks, {
    color: "#FF0000",
    lineWidth: 2,
  });
  drawConnectors(ctx, results.faceLandmarks, FACEMESH_TESSELATION, {
    color: "#C0C0C070",
    lineWidth: 1,
  });
  drawConnectors(ctx, results.leftHandLandmarks, HAND_CONNECTIONS, {
    color: "#CC0000",
    lineWidth: 5,
  });
  drawLandmarks(ctx, results.leftHandLandmarks, {
    color: "#00FF00",
    lineWidth: 2,
  });
  drawConnectors(ctx, results.rightHandLandmarks, HAND_CONNECTIONS, {
    color: "#00CC00",
    lineWidth: 5,
  });
  drawLandmarks(ctx, results.rightHandLandmarks, {
    color: "#FF0000",
    lineWidth: 2,
  });
  ctx.restore();
  start = performance.now()
}

const holistic = new Holistic({
  locateFile: (file) => {
    return `./js/mediapipe/model/holistic/${file}`;
  },
});

holistic.setOptions({
  modelComplexity: 1,
  smoothLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

holistic.onResults(onHResults);

// function onFDResults(results) {
//   // Draw the overlays.
//   ctx.save()
//   ctx.clearRect(0, 0, cW, cH)
//   ctx.drawImage(
//       results.image, 0, 0, cW, cH)
//   if (results.detections.length > 0) {
//     drawingUtils.drawRectangle(
//         ctx, results.detections[0].boundingBox,
//         {color: 'blue', lineWidth: 4, fillColor: '#00000000'})
//     drawingUtils.drawLandmarks(ctx, results.detections[0].landmarks, {
//       color: 'red',
//       radius: 5,
//     })
//   }
//   ctx.restore()
// }

// const faceDetection = new FaceDetection({locateFile: (file) => {
//   return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.4/${file}`
// }})
// faceDetection.setOptions({
//   modelSelection: 0,
//   minDetectionConfidence: 0.5
// })
// faceDetection.onResults(onFDResults)

const controls = window;
const fpsControl = new controls.FPS();
const controlsElement = document.querySelector("#control-panel");

new controls.ControlPanel(controlsElement).add([fpsControl]);

const onewebMeet = async () => {
  // await createOWTStream()
  initStream();
  await camera.start();
  getProcessedStream();
  initConference();
};
