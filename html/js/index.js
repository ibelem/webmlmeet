// License
var localStream = null;
var localScreen = null;
var localName = 'Anonymous';
var localId = null;
var localScreenId = null;
var users = [];
var progressTimeOut = null;
var smallRadius = 60;
var largeRadius = 120;
var isMouseDown = false;
var mouseX = null;
var mouseY = null;
var isScreenSharing = false;
var isLocalScreenSharing = false;
var remoteScreen = null;
var remoteScreenName = null;
var isMobile = false;
var streamObj = {};
var streamIndices = {};
var isSmall = false;
var isPauseAudio = true;
var isPauseVideo = false;
var isAudioOnly = false;

var showInfo = null;
var showLevel = null;
var scaleLevel = 3/4;
var refreshMute = null;

var currentRegions = null;

var localPublication = null;
var localScreenPubliction = null;
var joinResponse = null;

var localResolution = null;
var remoteMixedSub = null;
var subList = {};
var screenSub = null;

var room = null;
var roomId = null;

const remoteStreamMap = new Map();
const forwardStreamMap = new Map();

function login() {
  showMain();
  const value = $('#join').val();
  if (value !== '') {
    localName = value
    initConference();
  }
}

function alertCert(signalingHost) {
  const $d = $('#m-dialog');
  $d.empty();
  const infoText = 'The security certificate of the following url ' +
    'is not trusted by your computer\'s operating system. ' +
    'If you confirm to continue, click the url and proceed to the unsafe host, then come back' +
    'to this page and refresh.';
  const info = $('<div/>', {
    text: infoText
  });
  const anchor = $('<a/>', {
      text: `${signalingHost}/socket.io/`,
      target: '_blank',
      href: `${signalingHost}/socket.io/`
  });
  info.appendTo($d);
  anchor.appendTo($d);
  $d.show();
  $d.dialog();
}


function exit() {
  if (confirm('Are you sure to exit?')) {
    // window.open('', '_self').close();
    userExit();
  }
}

function userExit() {
  if (localStream) {
    localStream.mediaStream.getTracks().forEach(track => {
      track.stop();
    });
  }
  if (localScreen) {
    localScreen.mediaStream.getTracks().forEach(track => {
      track.stop();
    });
    $('#screen-btn').removeClass('disabled');
  }
  room.leave();

  users = [];
  subList = {};
  streamObj = {};
  streamIndices = {};
  $("#video-panel div[id^=client-]").remove();
  $("#localScreen").remove();
  $("#screen").remove();
  $("#container").hide();
  $("#user-list").empty();
  $('#video-panel').empty();
  localStream = undefined;
  isAudioOnly = false;
  clearInterval(refreshMute);
  location.reload();
}

function processRemoteStream(stream) {
  remoteStreamMap.set(stream.id, stream);
  let enedListener = (event) => {
    console.log(`remote stream ${stream.id} is ended`);
    remoteStreamMap.delete(stream.id);
    // destroyStreamUi(stream);
  };
  let activeaudioinputchangeListener = (event) => {
    console.log('activeaudioinputchange event triggered: ', event);
  };
  let layoutchangeListener = (event) => {
    console.log('layoutchange event triggered: ', event);
  };
  let update = (event) => {
    console.log('streamupdate event triggered: ', event, stream.id);
  }
  stream.addEventListener('ended', enedListener);
  stream.addEventListener('activeaudioinputchange', activeaudioinputchangeListener);
  stream.addEventListener('layoutchange', layoutchangeListener);
  stream.addEventListener('update', update);
}

function subscribeStream(stream) {
  console.info('subscribing:', stream.id);
  var videoOption = !isAudioOnly;
  room.subscribe(stream, {video: videoOption}).then(subscription => {
    console.info('subscribed: ',subscription.id);
    addVideo(stream, false);
    subList[subscription.id] = subscription;
    console.info("add success");
    streamObj[stream.id] = stream;
    if(stream.source.video === 'mixed'){
      remoteMixedSub = subscription;
    }
    if(stream.source.video === 'screen-cast'){
      screenSub = subscription;
      stream.addEventListener('ended', function(event) {
        setTimeout(function() {
          $('#local-screen').remove();
          $('#screen').remove();
          shareScreenChanged(false, false);
        }, 800);
      });
    }
    setTimeout(function() {
      subscription.getStats().then( report => {
        console.info(report);
        report.forEach(function(item,index){
          if(item.type === 'ssrc' && item.mediaType === 'video'){
            scaleLevel = parseInt(item.googFrameHeightReceived)/parseInt(item.googFrameWidthReceived);
            console.info(scaleLevel);
          }
        });
      }, err => {
        console.error('stats error: ' + err);
      });
    }, 1000);
    // monitor(subscription);
  }, err => {
    console.error('subscribe error: ' + err);
  });
}

function initConference() {
  $('#userNameDisplay').html("Logged in as: " + localName);

  var bandWidth = 100,
  localResolution = new Owt.Base.Resolution(320,240);
  if ($('#login-480').hasClass('selected')) {
    bandWidth = 500;
    localResolution = new Owt.Base.Resolution(640,480);
  } else if ($('#login-720').hasClass('selected')) {
    bandWidth = 1000;
    localResolution = new Owt.Base.Resolution(1280,720);
  }

  var avTrackConstraint = {};
  if ($("#login-audio-video").hasClass("selected")) {
    //TODO: maybe the room constraint,need to test a new room for more information
    avTrackConstraint = {
      audio: {
        source: "mic",
      },
      video:{
        resolution: localResolution,
        frameRate:24,
        source:'camera'
      },
    }
    console.log(avTrackConstraint);
  } else {
    avTrackConstraint = {
      audio: {
        source: "mic",
      },
      video: false,
    };
    isAudioOnly = true;
  }

  function createLocal() {
    let mediaStream;
    Owt.Base.MediaStreamFactory.createMediaStream(avTrackConstraint).then(stream => {
        mediaStream = stream;
        console.info('Success to create MediaStream');
        localStream = new Owt.Base.LocalStream(
          mediaStream,new Owt.Base.StreamSourceInfo(
            'mic', 'camera')
        );
        console.log('local stream:', localStream);
        localId = localStream.id;
        addVideo(localStream, true);

        room.publish(localStream).then(publication => {
          localPublication = publication;
          isPauseAudio = false;
          toggleAudio();
          isPauseVideo = true;
          toggleVideo();
          mixStream(roomId,localPublication.id,'common');
          console.info('publish success');
          streamObj[localStream.id] = localStream;
            publication.addEventListener('error', (err) => {
            console.log('Publication error: ' + err.error.message);
          });
        }, err => {
          console.log('Publish error: ' + err);
        });
      }, err => {
        console.error('Failed to create MediaStream, ' + err);
        if (err.name === "OverconstrainedError") {
          if(confirm("your camrea can't support the resolution constraints, please leave room and select a lower resolution")) {
            userExit();
          }
        }
      });
  }

  createToken(roomId, localName, 'presenter', function(response) {
    var token = response;
    if (!room) {
      room = new Owt.Conference.ConferenceClient();
      addRoomEventListener();
    }
    room.join(token).then(resp => {
        roomId = resp.id;
        var getLoginUsers = resp.participants;
        var streams = resp.remoteStreams;
        console.log(resp);
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
        });
        loadUserList();
        createLocal();
        streamObj = {};

        for (const stream of streams){
          if (stream.source.audio === 'mixed' && stream.source.video === 'mixed') {
            console.log("Mix stream id: " + stream.id);
            stream.addEventListener('layoutChanged', function(regions) {
              console.info('stream', stream.id, 'VideoLayoutChanged');
              currentRegions = regions;
            });
          }
          console.info('stream in conference:', stream.id);
          streamObj[stream.id] = stream;

          if (stream.source.video === 'screen-cast') {
            subscribeStream(stream); 
          }
        }

        refreshMuteState();
    }, err => {
      console.log("server connect failed: " + err);
      if (err.message.indexOf('connect_error:') >= 0) {
        const signalingHost = err.message.replace('connect_error:', '');
        alertCert(signalingHost);
      }
    });
  });
}

function refreshMuteState() {
  refreshMute = setInterval(() => {
    getStreams(roomId, (streams) => {
      forwardStreamMap.clear();
      for (const stream of streams) {
        // console.log(stream);
        if (stream.type === 'forward') {
          forwardStreamMap.set(stream.id, stream);
          if (stream.media.audio) {
            const clientId = stream.info.owner;
            const muted = (stream.media.audio.status === 'inactive');
            chgMutePic(clientId, muted);
          }
        }
      }
    });
  }, 1000);
}

function monitor(subscription){
  var bad = 0, lost = 0, rcvd = 0, lostRate = 0, bits = 0, bitRate = 0;
  var current = 0, level = 0;
  showInfo = setInterval(function() {
    subscription.getStats().then((report) => {
      var packetsLost = 0;
      var packetsRcvd = 0;
      var bitsRcvd =0;
      report.forEach(function(value, key){
        if(key.indexOf('RTCInboundRTPVideoStream') != -1) {
          packetsLost = parseInt(value.packetsLost);
          packetsRcvd = parseInt(value.packetsReceived);
          bitsRcvd = parseInt(value.bytesReceived);
          bitRate = ((bitsRcvd-bits)*8/1000/1000).toFixed(3);
          lostRate = (packetsLost-lost) / (packetsRcvd-rcvd);


          $('#rcvd').html(packetsRcvd);
          $('#lost').html(packetsLost);
          $('#bitRate').html(bitRate);
          $('#codec').html(report.get(value.codecId).mimeType.split('/')[1]);
          
          lost = packetsLost;
          rcvd = packetsRcvd;
          bits = bitsRcvd;

          var lostRateNum = parseInt(lostRate*100);
          if(lostRateNum <2) {
            level = 4;
          } else if(lostRateNum <5) {
            level = 3;
          } else if(lostRateNum <10) {
            level = 2;
          } else {
            level = 1;
          }
        }
        if(key.indexOf('RTCIceCandidatePair') != -1) {
          $('#bandwidth').html((parseInt(value.availableIncomingBitrate)/1024/1024).toFixed(3));
        }
      });
    }, err => {
      console.error(err);
    })
  },1000);
  showLevel = setInterval(function() {
    level = level > 4 ? 4 : level;
    if (current < level) {
      current++;
      $('#wifi'+current).css('display', 'block').siblings().css('display', 'none');
    } else if (current > level) {
      current--;
      $('#wifi'+current).css('display', 'block').siblings().css('display', 'none');
    }
    if ((level < 2) && !isPauseVideo) {
      if(bad < 8){
        bad++;
      }
    } else if (bad > 0) {
        bad--;
    }
    if (bad >= 8 && $('#promt').css('opacity') == '0') {
      $('#promt').css('opacity', '1');
    } else if(bad == 0 && $('#promt').css('opacity') == '1') {
      $('#promt').css('opacity', '0');
    }
  }, 1000);
}

function stopMonitor() {
  clearInterval(showInfo);
  clearInterval(showLevel);
}

function loadUserList() {
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

function addRoomEventListener() {
  room.addEventListener('streamadded', (streamEvent) => {
    console.log('streamadded', streamEvent);
    var stream = streamEvent.stream;

    if (localStream && localStream.id === stream.id) {
      return;
    }
     
    if (stream.source.video === 'screen-cast') {
      thatName = "Screen Sharing";
      if (isLocalScreenSharing) {
        return;
      }
    }

    var thatId = stream.id;
    if (stream.source.audio === 'mixed' && stream.source.video === 'mixed') {
      thatName = "MIX Stream";
    } else if ( stream.source.video === 'screen-cast') {
      thatName = "Screen Sharing";
    }

    // add video of non-local streams
    if (localId !== thatId && localScreenId !== thatId && localName !== getUserFromId(stream.origin).userId) {
      subscribeStream(stream);
    }
  });

  room.addEventListener('participantjoined', (event) => {
    console.log('participantjoined', event);
    if(event.participant.userId !== 'user' && getUserFromId(event.participant.id) === null){
      //new user
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

function shareScreen() {
  if ($('#screen-btn').hasClass('disabled')) {
    return;
  }
  sendIm('You are sharing screen now.');
  $('#video-panel .largest').removeClass("largest");
  $('#video-panel').append(
    '<div id="local-screen" class="client clt-0 largest"' +
    '>Screen Sharing</div>').addClass('screen');
  var width = screen.width,
    height = screen.height;

  var screenSharingConfig = {
    audio: {
      source: "screen-cast"
    },
    video:{
      resolution:{
        "width": width,
        "height":height
      },
      frameRate:20,
      source:'screen-cast'
    },
    //extensionId:'pndohhifhheefbpeljcmnhnkphepimhe'
  }
  Owt.Base.MediaStreamFactory.createMediaStream(screenSharingConfig).then( stream => {
    localScreen = new Owt.Base.LocalStream(stream,new Owt.Base.StreamSourceInfo('screen-cast','screen-cast'));
    console.info(localScreen);
    localScreenId = localScreen.id;
    var screenVideoTracks = localScreen.mediaStream.getVideoTracks();
    for (const screenVideoTrack of screenVideoTracks) {
      screenVideoTrack.addEventListener('ended', function(e) {
        console.log('unpublish');
        setTimeout(function() {
          $('#local-screen').remove();
          $('#screen').remove();
          shareScreenChanged(false, false);
        }, 800);
        localScreenPubliction.stop();
      });
    }
    room.publish(localScreen).then( publication => {
      console.info('publish success');
      localScreenPubliction = publication;
    }, err => {
      console.error('localsreen publish failed');
    });
  }, err => {
    console.error('create localscreen failed');
    $('#local-screen').remove();
    $('#screen').remove();
    shareScreenChanged(false, false);
    //TODO: limit to https
  });

  shareScreenChanged(true, true);
}

// update screen btn when sharing
function shareScreenChanged(ifToShare, ifToLocalShare) {
  isScreenSharing = ifToShare;
  isLocalScreenSharing = ifToLocalShare;
  $('#screen-btn').removeClass('disabled selected');
  if (ifToShare) {
    if (ifToLocalShare) {
      $('#screen-btn').addClass('selected disabled');
    } else {
      $('#screen-btn').addClass('disabled');
    }
  } else {
    $('#video-panel').removeClass('screen');
  }
}

function addVideo(stream, isLocal) {
  // compute next html id
  //var id = $('#video-panel').children('.client').length;
  var id = stream.id;
  console.log("addVideo video panel client length:", id);
  //while ($('#client-' + id).length > 0) {
    //++id;
  //}
  var uid = stream.origin;
  if (isLocal) {
    console.log("localStream addVideo1");
  }

  // check if is screen sharing
  if (stream.source.video === 'screen-cast') {
    $('#video-panel').addClass('screen')
      .append('<div id="screen"></div>');
    $('#screen').append('<video id="remoteScreen" playsinline autoplay></video>');
    $('#remoteScreen').get(0).srcObject = stream.mediaStream;
    // stream.show('screen');
    $('#screen').addClass('clt-' + getColorId(uid))
      .children().children('div').remove();
    $('#screen').append(
      '<div id="original"><a href="#"></a><a href="#"></a><a href="#"></a></div>').append('<div>' +
      'Screen Sharing from ' + getUserFromId(stream.origin)["userId"] + '</div>');
    $('#local-screen').remove();
    streamObj["screen"] = stream;
  } else {
    // append to global users
    var thisUser = getUserFromId(uid) || {};
    var htmlClass = isLocal ? 0 : (id - 1) % 5 + 1;
    thisUser.htmlId = id;
    thisUser.htmlClass = thisUser.htmlClass || htmlClass;
    thisUser.id = uid;

    $('#video-panel').append('<div id="client-' + id + '"></div>') ;
    if (isLocal) {
      $('#client-' + id).append('<video id="localVideo" playsinline muted autoplay></video>')
      $('#localVideo').get(0).srcObject = stream.mediaStream;
    }else {
      $('#client-' + id).append('<video id="remoteVideo" playsinline autoplay></video>')
      $('#remoteVideo').get(0).srcObject = stream.mediaStream;
    }

    var player = $('#client-' + id).children(':not(.self-arrow)');
    player.children('div').remove();
    player.attr('id', 'player-' + id).addClass('video');

    // add avatar for no video users
    if (stream.mediaStream === false) {
      player.parent().addClass('novideo');
      player.append('<img src="img/avatar.png" class="img-novideo" />');
    }

 
    var name = (stream === localStream) ? localName : getUserFromId(stream.origin).userId || {};
 
    var muteBtn = "";
    streamIndices['client-' + id] = stream.id;

    $('#client-' + id).append('<div class="ctrl">' +
        '<a href="#" class="ctrl-btn fullscreen"></a>' + muteBtn + '</div>')
      .append('<div class="ctrl-name">' + name + '</div>').append(
        "<div class='noCamera'></div>");
    stream.addEventListener('ended', function(event) {
      console.log("====stream ended:", stream.id);
      $('#client-' + stream.id).remove();
      if (stream.source.video === 'screen-cast') {
        $('#screen-btn').removeClass('disabled');
      }
    });
  }
}

function getStreamId(left, top) {
  for(var i in currentRegions) {
    if(left > currentRegions[i].left && left < (currentRegions[i].left + currentRegions[i].relativeSize) && top > currentRegions[i].top && top < (currentRegions[i].top + currentRegions[i].relativeSize)) {
      return currentRegions[i].streamID;
    }
  }
  return null;
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

  var color = getColor(sender);
  var user = getUserFromId(sender);
  var name = user ? user['userId'] : 'System';
  if (name !== 'System') {
    $('<p class="' + color + '">').html(timeStr + ' ' + name + '<br />')
      .append(document.createTextNode(msg)).appendTo('#text-content');
    // scroll to bottom of text content
    $('#text-content').scrollTop($('#text-content').prop('scrollHeight'));
  }
}

function getColorId(id) {
  var user = getUserFromId(id);
  if (user) {
    return user.htmlClass;
  } else {
    // screen stream comes earlier than video stream
    var htmlClass = users.length % 5 + 1;
    users.push({
      name: name,
      htmlClass: htmlClass
    });
    return htmlClass;
  }
}

function getColor(id) {
  var user = getUserFromId(id);
  if (user) {
    return 'clr-clt-' + user.htmlClass;
  } else {
    return 'clr-sys';
  }
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
  for (var i = 0; i < users.length; ++i) {
    if (users[i] && users[i].id === id) {
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
  $('li').remove(":contains(" + id + ")");  
}

function toggleMute(id, toMute) {
  if (streamObj[streamIndices["client-" + id]]) {
    if (toMute) {
      streamObj[streamIndices["client-" + id]].disableAudio();
    } else {
      streamObj[streamIndices["client-" + id]].enableAudio();
    }
  }
}

// no use
function playpause() {
  var el = event.srcElement;
  if (el.getAttribute("isPause") != undefined) {
    el.innerText = "Pause Video";
    for (var tmp in room.remoteStreams) {
      var stream = room.remoteStreams[tmp];
      if (stream.id() !== localStream.id()) {
        stream.playVideo();
      } else {
        localStream.enableVideo();
      }
    }
    $(".noCamera").hide();
    el.removeAttribute("isPause");
  } else {
    el.innerText = "Play Video";
    for (var tmp in room.remoteStreams) {
      var stream = room.remoteStreams[tmp];
      if (stream.id() !== localStream.id()) {
        stream.pauseVideo();
      } else {
        localStream.disableVideo();
      }
    }
    $(".noCamera").show();
    el.setAttribute("isPause", "");
  }
}

function toggleVideo() {
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
      subList[temp].mute(Owt.Base.TrackKind.VIDEO)
    }
    localStream.mediaStream.getVideoTracks()[0].enabled = false;
    localPublication.mute(Owt.Base.TrackKind.VIDEO).then(
      () => {
        console.info('mute video');
        $('#pauseVideo').css({
          backgroundImage: 'url("img/turn-video.png")',
          backgroundColor: '#ccc'
        });
        isPauseVideo = !isPauseVideo;
        $('#promt').css('opacity', '0');
      }, err => {
        console.error('mute video failed');
      }
    );
  } else {
     //remoteMixedSub.unmute(Owt.Base.TrackKind.VIDEO);
    for (var temp in subList) {
      if (subList[temp] === screenSub) {
        continue;
      }
      subList[temp].unmute(Owt.Base.TrackKind.VIDEO)
    }
    localStream.mediaStream.getVideoTracks()[0].enabled = true;
    localPublication.unmute(Owt.Base.TrackKind.VIDEO).then(
      () => {
        console.info('unmute video');
        $('#pauseVideo').css({
          backgroundImage: 'url("img/video.png")',
          backgroundColor: '#7bff7a'
        });
        isPauseVideo = !isPauseVideo;
      }, err => {
        console.error('unmute video failed');
      }
    );
  }
}

function toggleAudio() {
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

