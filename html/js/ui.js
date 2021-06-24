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
async function login() {
  showMain();
  localName = $("#join").val();
  if (localName !== "") {
    $("#navuser").html("Logged in: " + localName);
    initConference();
  }
}

$(document).ready(function () {
  $(".buttonset>a").click(function () {
    console.log($(this));
    $(this).siblings("a").removeClass("selected");
    $(this).addClass("selected");
  });

  // name
  if (window.location.search.slice(0, 6) === "?room=") {
    roomId = window.location.search.slice(6);
  }

  if (window.location.protocol === "https:") {
  } else {
    // $('#screen-btn').addClass('disabled');
  }

  $(document).on("click", "#pauseVideo", function () {
    toggleVideo();
  });

  $(document).on("click", "#pauseAudio", function () {
    toggleAudio();
  });

  $(document).on("click", ".mute", function () {
    // unmute
    var id = parseInt($(this).parent().parent().attr("id").slice(7));
    toggleMute(id, false);
    $(this).addClass("unmute").removeClass("mute");
  });

  $(document).on("click", ".unmute", function () {
    // mute
    var id = parseInt($(this).parent().parent().attr("id").slice(7));
    toggleMute(id, true);
    $(this).addClass("mute").removeClass("unmute");
  });

  //TODO:mute others
  $(document).on("dblclick", ".muteShow", function () {
    // mute others
    var muteId = $(this).siblings(".userID").text();
    var msg = {
      type: "force",
    };
    forwardStreamMap.forEach((stream, key) => {
      if (stream.info.owner === muteId && stream.media.audio) {
        if (stream.media.audio.status === "active") {
          pauseStream(roomId, stream.id, "audio", () =>
            chgMutePic(muteId, true)
          );
        } else {
          playStream(roomId, stream.id, "audio", () =>
            chgMutePic(muteId, false)
          );
        }
      }
    });
  });

  $("#text-send").keypress(function (event) {
    if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
      $(this).height($(this)[0].scrollHeight);
      $("#text-content").css("bottom", $(this)[0].scrollHeight + "px");
    }
    if (event.keyCode === 13) {
      event.preventDefault();
      // send msg when press enter
      sendIm();
    }
  });

  $(window).resize(function () {});

  checkMobile();

  setInterval(() => {
    const d = new Date();
    $("#clock").html(getTime() + ":");
    $("#mill").html(d.getMilliseconds());
  }, 1);
});

$(window).on("unload", function () {
  userExit();
});

function checkMobile() {
  if (
    /iphone|ipod|android|ie|blackberry|fennec/.test(
      navigator.userAgent.toLowerCase()
    )
  ) {
    isMobile = true;
    $("#im-btn").hide();
  }
}

const getTime = () => {
  const time = new Date();
  let hour = time.getHours();
  hour = hour > 9 ? hour.toString() : "0" + hour.toString();
  let mini = time.getMinutes();
  mini = mini > 9 ? mini.toString() : "0" + mini.toString();
  let sec = time.getSeconds();
  sec = sec > 9 ? sec.toString() : "0" + sec.toString();
  return hour + ":" + mini + ":" + sec;
};

const toggleVideoUI = () => {
  $("#tvn").toggleClass("block");
  $("#tvb").toggleClass("block");
  toggleVideo();
};

const toggleAudioUI = () => {
  $("#tan").toggleClass("block");
  $("#tab").toggleClass("block");
  toggleAudio();
};

const checkLeftBar = () => {
  if (
    $("#participants").css("display") == "block" ||
    $("#conversation").css("display") == "block"
  ) {
    $("#left-bar").fadeIn();
    $("footer").addClass("moveleft");
  }

  if (
    $("#participants").css("display") !== "block" &&
    $("#conversation").css("display") !== "block"
  ) {
    $("#left-bar").fadeOut();
    $("footer").removeClass("moveleft");
  }

  if (
    $("#participants").css("display") == "block" &&
    $("#conversation").css("display") !== "block"
  ) {
    $("#user-list").addClass("full");
    $("#text-content").removeClass("full");
  } else if (
    $("#participants").css("display") !== "block" &&
    $("#conversation").css("display") == "block"
  ) {
    $("#user-list").removeClass("full");
    $("#text-content").addClass("full");
  } else {
    $("#user-list").removeClass("full");
    $("#text-content").removeClass("full");
  }
};

const toggleUserList = () => {
  $("#participants").toggle();
  checkLeftBar();
  $("#tuloff").toggleClass("block");
  $("#tulon").toggleClass("block");
};

const toggleMessage = () => {
  $("#conversation").toggle();
  checkLeftBar();
  $("#tmoff").toggleClass("block");
  $("#tmon").toggleClass("block");
};

function addUserListItem(user, muted) {
  var muteBtn = `
    <div class="muteShow" isMuted="true">
      <svg class="svg-inline--fa fa-volume-mute fa-w-16" viewBox="0 0 512 512"><path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>
    </div>
    `;
  var unmuteBtn = `
    <div class="muteShow" isMuted="false">
      <svg svg-inline--fa fa-volume-off fa-w-8" viewBox="0 0 256 512"><path fill="currentColor" d="M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"></path></svg>
    </div>
    `;
  var muteStatus = muted ? muteBtn : unmuteBtn;
  $("#user-list").append(
    "<li id=" +
      user.id +
      '><div class="userID">' +
      user.id +
      `</div>
    <div>
    <svg class="svg-inline--fa fa-user fa-w-14" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
    </div>
    <div class="name">` +
      user.userId +
      "</div>" +
      muteStatus +
      "</li>"
  );
}

function chgMutePic(id, muted) {
  var line = $("li:contains(" + id + ")").children(".muteShow");
  if (muted) {
    line.html(`
      <svg class="svg-inline--fa fa-volume-mute fa-w-16" viewBox="0 0 512 512"><path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>
    `);
    line.attr("isMuted", true);
  } else {
    line.html(`
      <svg class="svg-inline--fa fa-volume-off fa-w-8" viewBox="0 0 256 512"><path fill="currentColor" d="M215 71l-89 89H24a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h102.06L215 441c15 15 41 4.47 41-17V88c0-21.47-26-32-41-17z"></path></svg>
    `);
    line.attr("isMuted", false);
  }
}
