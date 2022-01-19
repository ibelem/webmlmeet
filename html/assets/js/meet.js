
const inputvideo = $("#inputvideo")[0];
const outputcanvas = $("#outputcanvas")[0];

let backgroundImageSource = document.querySelector("#bgdefault");
const bg = document.querySelector("#bgdefault");
const bgpause = document.querySelector("#bgpause");
const bgfilebutton = document.querySelector("#bgimg");

let backgroundType = 'img'; // 'none', 'blur', 'image'

let cW = $("#outputcanvas")[0].width;
let cH = $("#outputcanvas")[0].height;
let isSS = false, effect;
let rafReq;
let continueAnimating = true;

let usr;

let camera,
  isbr = false,
  isbb = false,
  isbeauty = false,
  isns = false;

let backend = parseParamBackend()
let modelname = parsePathnameModel()
let mi = parseParamModelI()
let ds = parseParamDevice()
let model;
let fk = parsePathFwk()

if(modelname === "ss" && mi === "ss") model = "0"
if(modelname === "ss" && mi === "ssl") model = "1"
if(modelname === "dl" && mi === "3") model = "2"
if(modelname === "dl" && mi === "5") model = "3"

// console.log("***********************************************")
// console.log(backend)
// console.log(modelname)
// console.log(mi)
// console.log(ds)
// console.log(model)
// console.log("***********************************************")

let ssmodelinfo = [{
    id: 0,
    name: 'Selfie Segmentation',
    inputsize: '256x256x3 (HWC)',
    outputsize: '256x256x1',
    size: '249.0kB',
    basedon: 'MobileNetV3',
    format: fk
  },{
    id: 1,
    name: 'Selfie Segmentation Landscape',
    inputsize: '144x256x3 (HWC)',
    outputsize: '144x256x1',
    size: '249.8kB',
    basedon: 'MobileNetV3',
    format: fk
  },{
    id: 2,
    name: 'DeepLabV3',
    inputsize: '321x321x3',
    outputsize: '321x321x21',
    size: '8.4mB',
    basedon: 'MobileNetV2',
    format: fk
  }
  ,{
    id: 3,
    name: 'DeepLabV3',
    inputsize: '513x513x3',
    outputsize: '513x513x21',
    size: '8.4mB',
    basedon: 'MobileNetV2',
    format: fk
  }
]

let isfullscreen = false

let room = null, pc;
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

let localname = "user";
let start, end, delta;
let spaninference = $("#spaninference")

const rnnoise = new RNNoiseONNX();
const audioProcesser = new Processer(rnnoise.steps);

// // Dynamically load the DSP library (Wasm).
// const wasmScript = document.createElement('script');
// wasmScript.type = 'text/javascript';
// wasmScript.onload = function () {
//   console.log('DSP library (Wasm) Preparing ...');
//   Module.onRuntimeInitialized = function () {
//     console.log('DSP library (Wasm) Loaded.');
//   };
// };
// wasmScript.src = 'process/process.js';
// document.getElementsByTagName('head')[0].appendChild(wasmScript);

// Global MediaStreamTrackProcessor, MediaStreamTrackGenerator, AudioData.
if (typeof MediaStreamTrackProcessor === 'undefined' ||
  typeof MediaStreamTrackGenerator === 'undefined') {
  alert(
    'Your browser does not support the MediaStreamTrack API for ' +
    'Insertable Streams of Media.');
}
try {
  new MediaStreamTrackGenerator('audio');
  console.log('Audio insertable streams supported.');
} catch (e) {
  alert('Your browser does not support insertable audio streams.');
}
if (typeof AudioData === 'undefined') {
  alert('Your browser does not support WebCodecs.');
}

// RNNoise inference session 
let rnmodel;
// Audio element
let audio;

// Transformation chain elements
let processor;
let generator;
let transformer;
let denoisemode = false;

let abortController;

// // Initialize on page load.
// async function init() {
//   audio = document.getElementById('audioOutput');
//   originalButton = document.getElementById('originalButton');
//   stopButton = document.getElementById('stopButton');
//   denoiseButton = document.getElementById('denoiseButton');

//   originalButton.onclick = original;
//   stopButton.onclick = stop;
//   denoiseButton.onclick = denoise;

//   rnmodel = await rnnoise.load();
// }

const nsLoad = async () => {
  try {
    rnmodel = await rnnoise.load();
    $("#modelloadstatus").html('NS Model Loaded');
    if(!isPauseAudio) {
      $("#tns").prop('disabled', false);
      $("#tns").removeClass('disabled');
    }
  } catch (error) {
    $("#modelloadstatus").html('Failed to Load Noise Suppression Model');
    $("#tns").prop('disabled', true);
    $("#tns").addClass('disabled');
  }
}

let createLocal = () => {
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

const initConference = () => {
  // resolution = { width: 320, height: 240 };
  // if ($("#login-480").hasClass("selected")) {
  //   resolution = { width: 640, height: 480 };
  // } else if ($("#login-720").hasClass("selected")) {
  //   resolution = { width: 1280, height: 720 };
  // }

  createToken(roomId, localname, "presenter", function (response) {
    console.log('createToken0')
    let token = response;
    console.log(token)
    if (!room) {
      room = new Owt.Conference.ConferenceClient();
      addRoomEventListener();
    }
    console.log('createToken1')
    console.log("============ room ==================")
    console.log(room.peerConnection)
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
      console.log("server connect failed: " + err.message);

      const certmessage =
      `No remote camera stream show in page (caused by certificate in test
      environment)?<br><br>

      NET::ERR_CERT_AUTHORITY_INVALID

      <ol>
        <li>
          Visit
          <a href="https://10.239.115.78:8080/socket.io/?EIO=3&transport=polling">the test page</a>
        </li>
        <li>
        "Your connection is not private" -&gt; Click "Advanced" button -&gt; Click "Proceed to 10.239.115.78 (unsafe)"
        </li>
        <li>Go back and refresh this page.</li>
      </ol>`
      $("#errormsg").html(certmessage); 
      $("#errormsg").fadeIn();
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

      addVideo(remotestream, getUserFromId(remotestream.origin).userId)

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
    console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS')
  });
};

function addVideo(remotestream, username) {
  let usernametag = ''
  if(username) {
    usernametag = `<div class="username">${username}</div><div class="usernamefs">${username}</div>`
  }
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
      ${usernametag}
    </div>
    `
  );
  $("#video-panel").append($video);
  let vid = "#v" + remotestream.id;
  document.querySelector(vid).srcObject = remotestream.mediaStream;

  userMarquee();
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
      if (localname !== null) {
        room.send(sendMsgInfo).then(() => {
          console.info('begin to send message');
          console.info(localname + 'send message: ' + msg);
        }, err => {
          console.error(localname + 'sned failed: ' + err);
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
      console.log('localname: '+ localname + ' !== getUserFromId(stream.origin).userId: ' + getUserFromId(stream.origin).userId)

      if (localId !== stream.id && localScreenId !== stream.id && localname !== getUserFromId(stream.origin).userId) {
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

const stopStream = () => {
  if (localStream) {
    localStream.mediaStream.getTracks().forEach((track) => {
      if (track.readyState === 'live' && track.kind === 'video') {
        track.stop();
      }
    });
  }
  if (localScreen) {
    localScreen.mediaStream.getTracks().forEach((track) => {
      if (track.readyState === 'live' && track.kind === 'video') {
        track.stop();
      }
    });
  }
}

const userExit = () => {
  stopStream();
  localStream = undefined;
  room.leave();
  users = [];
  subList = {};
  isAudioOnly = false;
};

// Returns a denosie transform function for use with TransformStream.
function denoiseFilter() {
  const frameSize = 480; // 10ms audio data (SampleRate = 48000)
  const format = 'f32-planar';
  return async (data, controller) => {
    const inputBuffer = new Float32Array(frameSize);
    data.copyTo(inputBuffer, { planeIndex: 0, format });
    let startPreProcessing = performance.now();
    const audioFeatures = audioProcesser.preProcessing(inputBuffer);
    const modelInput = new Float32Array(audioFeatures);
    let startCompute = performance.now();
    const modelOutput = await rnnoise.compute(rnmodel, modelInput);
    let startPostProcessing = performance.now();
    const audioData = audioProcesser.postProcessing(modelOutput);
    const audioBuffer = new Float32Array(audioData);
    let endProcessing = performance.now();
    controller.enqueue(new AudioData({
      format,
      sampleRate: data.sampleRate,
      numberOfFrames: data.numberOfFrames,
      numberOfChannels: data.numberOfChannels,
      timestamp: data.timestamp,
      data: audioBuffer
    }));
    const preProcessingTime = (startCompute - startPreProcessing).toFixed(2);
    const computeTime = (startPostProcessing - startCompute).toFixed(2);
    const postProcessingTime = (endProcessing - startPostProcessing).toFixed(2);
    console.log(
      `preProcessingTime time: ${preProcessingTime} ms  ` +
      `computeTime time: ${computeTime} ms  ` +
      `postProcessingTime time: ${postProcessingTime} ms`
    );
    $('#nsspanprep').html(preProcessingTime);
    $('#nsspaninference').html(computeTime);
    $('#nsspanpostp').html(postProcessingTime);
  };
}

const getProcessedStream = () => {
  processedstream = outputcanvas.captureStream();
  // if (location.pathname.indexOf('ort-dl') == -1) {
  //   const audiotrack = stream.getAudioTracks()[0];
  //   processedstream.addTrack(audiotrack);
  // }
};

async function originalAudio() {
  if (processedstream.getAudioTracks().length > 0) {
    processedstream.removeTrack(processedstream.getAudioTracks()[0]);
  }
  try {
    abortController.abort();
    abortController = null;
  } catch (ex) {
    console.log(ex)
  }
  denoisemode = false
  const audiotrack = stream.getAudioTracks()[0];
  processedstream.addTrack(audiotrack);
  console.log('============== audio =========')
  console.log(processedstream.getAudioTracks())
  console.log(processedstream.getAudioTracks()[0])
  try {
    console.log(processedstream.getAudioTracks()[0].constructor.name)
  } catch (ex) {
    
  }
}

async function denoise() {
  denoisemode = true
  if (processedstream.getAudioTracks().length > 0) {
    processedstream.removeTrack(processedstream.getAudioTracks()[0]);
  }
  const audiotrack = stream.getAudioTracks()[0];
  processor = new MediaStreamTrackProcessor(audiotrack);
  generator = new MediaStreamTrackGenerator('audio');
  const source = processor.readable;
  const sink = generator.writable;
  console.log(processor)
  console.log(source)
  transformer = new TransformStream({ transform: denoiseFilter() });
  abortController = new AbortController();
  const signal = abortController.signal;
  const promise = source.pipeThrough(transformer, { signal }).pipeTo(sink);
  promise.catch((e) => {
    if (signal.aborted) {
      console.log('Shutting down streams after abort.');
    } else {
      console.error('Error from stream transform:', e);
    }
    source.cancel(e);
    sink.abort(e);
  });
  processedstream.addTrack(generator);

  console.log('============== audio processed aaa =========')
  console.log(processedstream.getAudioTracks())
  console.log(processedstream.getAudioTracks()[0])
  try {
    console.log(processedstream.getAudioTracks()[0].constructor.name)
  } catch (ex) {

  }

}

// async function stop() {
//   stopButton.disabled = true;
//   audio.pause();
//   audio.srcObject = null;
//   stream.getTracks().forEach(track => {
//     track.stop();
//   });
//   if (denoiseMode) {
//     abortController.abort();
//     abortController = null;
//     denoiseMode = false;
//   }
//   originalButton.disabled = false;
//   denoiseButton.disabled = false;
// }


$(".bgselector").each(function () {
  $(this).on("click", function (e) {
    backgroundImageSource.src = e.target.src;
  });
});

bgfilebutton.addEventListener(
  "change",
  (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      backgroundImageSource.src = URL.createObjectURL(files[0]);
    }
  },
  false
);