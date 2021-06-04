$(document).ready(function () {
  $("#container").css("display", "none");
  $("#login").fadeIn();
});

function loginDisableVideo() {
  $("#login-resolution").slideUp();
}

function loginEnableVideo() {
  $("#login-resolution").slideDown();
}

function showMain() {
    $("#login").hide(200);
    $("#wrapper").fadeIn(400);
}

$(document).ready(function() {
    $('.buttonset>a').click(function() {
      console.log($(this))
      $(this).siblings('a').removeClass('selected');
      $(this).addClass('selected');
    })
  
    // name
    if (window.location.search.slice(0, 6) === '?room=') {
      roomId = window.location.search.slice(6);
    }
  
    if (window.location.protocol === "https:") {
      $('#screen-btn').removeClass('disabled');
    } else {
      // $('#screen-btn').addClass('disabled');
    }
  
    $(document).on('click', '#pauseVideo', function() {
      toggleVideo();
    });
  
    $(document).on('click', '#pauseAudio', function() {
      toggleAudio();
    });
  
    $(document).on('click', '.mute', function() {
      // unmute
      var id = parseInt($(this).parent().parent().attr('id').slice(7));
      toggleMute(id, false);
      $(this).addClass('unmute').removeClass('mute');
    });
  
    $(document).on('click', '.unmute', function() {
      // mute
      var id = parseInt($(this).parent().parent().attr('id').slice(7));
      toggleMute(id, true);
      $(this).addClass('mute').removeClass('unmute');
    });
  
    //TODO:mute others
    $(document).on('dblclick', '.muteShow', function() {
      // mute others
      var muteId = $(this).siblings('.userID').text();
      var msg = {
        type: "force",
      };
      forwardStreamMap.forEach((stream, key) => {
        if (stream.info.owner === muteId && stream.media.audio) {
          if (stream.media.audio.status === 'active') {
            pauseStream(roomId, stream.id, 'audio', () => chgMutePic(muteId, true));
          } else {
            playStream(roomId, stream.id, 'audio', () => chgMutePic(muteId, false));
          }
        }
      });
    });
  
    $('#text-send').keypress(function(event) {
      if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
        $(this).height($(this)[0].scrollHeight);
        $('#text-content').css('bottom', $(this)[0].scrollHeight + 'px');
      }
      if (event.keyCode === 13) {
        event.preventDefault();
        // send msg when press enter
        sendIm();
      }
    });
  
    $('.dialog--close').click(function() {
      $(this).parent().parent().hide();
    });
  
    $(window).resize(function() {
    });
  
    checkMobile();
  });
  
  $(window).on("unload", function() {
    userExit();
  });
  
  function checkMobile() {
    if ((/iphone|ipod|android|ie|blackberry|fennec/).test(navigator.userAgent.toLowerCase())) {
      isMobile = true;
      $("#im-btn").hide();
    }
  }