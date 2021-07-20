// const inputvideo_owt = $("#inputvideo_owt")[0]
const inputvideo_mp = $("#inputvideo_mp")[0];
const ctx = $("#outputcanvas")[0].getContext("2d");
let cW = $("#outputcanvas")[0].width;
let cH = $("#outputcanvas")[0].height;
let camera,
  isbr = false,
  isbb = false,
  isbeauty = false;
let selfie_segmentation_landscape = 0
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
        isPauseAudio = !isPauseAudio;
      },err => {
        console.error('mute failed');
      }
    );
  } else {
    localPublication.unmute(Owt.Base.TrackKind.AUDIO).then(
      () => {
        console.info('unmute successfully');
        isPauseAudio = !isPauseAudio;
      },err => {
        console.error('unmute failed');
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

function chgMutePic(id, muted) {
  var line = $('li:contains(' + id + ')').children('.muteShow');
  if (muted) {
    line.attr('src', "img/mute_white.png");
    line.attr('isMuted', true);
  } else {
    line.attr('src', "img/unmute_white.png");
    line.attr('isMuted', false);
  }
}

function addUserListItem(user, muted) {
  var muteBtn =
    `<div class="muteShow" isMuted="true">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" />
      </svg> 
    </div>`;
  var unmuteBtn =
    `<div class="muteShow" isMuted="true">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
      </svg>
    </div>`;
  var muteStatus = muted ? muteBtn : unmuteBtn;
  $('#user-list').append('<li><div class="userID">' + user.id +
    `</div>
    <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
    </svg>
    <div class="name">`
    + user.userId + '</div>' + muteStatus + '</li>');
}

function sendIm(msg, sender) {
  var time = new Date();
  var hour = time.getHours();
  hour = hour > 9 ? hour.toString() : '0' + hour.toString();
  var mini = time.getMinutes();
  mini = mini > 9 ? mini.toString() : '0' + mini.toString();
  var sec = time.getSeconds();
  sec = sec > 9 ? sec.toString() : '0' + sec.toString();
  var timeStr = hour + ':' + mini + ':' + sec;
  if (msg === undefined) {
    // send local msg
    if ($('#text-send').val()) {
      msg = $('#text-send').val();
      var sendMsgInfo = JSON.stringify({
        type: "msg",
        data: msg
      })
      $('#text-send').val('').height('18px');
      $('#text-content').css('bottom', '30px');
      sender = localId;
      console.info('ready to send message');
      // send to server
      if (localName !== null) {
        room.send(sendMsgInfo).then(() => {
          console.info('begin to send message');
          console.info(localName + 'send message: ' + msg);
        }, err => {
          console.error(localName + 'sned failed: ' + err);
        });
      }
    } else {
      return;
    }
  }

  var user = getUserFromId(sender);
  var name = user ? user['userId'] : 'System';
  if (name !== 'System') {
    $('<p>').html(
      `
      <div class="msghead">
      <div class="msguser">${user.userId }</div><div class="msgtime">${timeStr}</div>
      </div>
      `
      )
      .append(document.createTextNode(msg)).appendTo('#text-content');
    // scroll to bottom of text content
    $('#text-content').scrollTop($('#text-content').prop('scrollHeight'));
  }
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
          sendIm(event.participant.userId + ' has left the room ', 'System');
          deleteUser(event.participant.id);
        } else {
          sendIm('Anonymous has left the room.', 'System');
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
        $('<p>').html(
          `
          <div class="msghead">
          <div class="msguser">${user.userId }</div><div class="msgtime">${timeStr}</div>
          </div>
          `
          )
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