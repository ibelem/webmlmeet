$(document).ready(function () {
  $("#container").css("display", "none")
  $("#login").fadeIn()
})

const loginDisableVideo = () => {
  $("#login-resolution").slideUp()
}

const loginEnableVideo = () => {
  $("#login-resolution").slideDown()
}

const showMain = () => {
  $("#login").hide(200)
  $("#wrapper").fadeIn(400)
}
const login = async () => {
  showMain()
  localName = $("#inputjoin").val()
  if (localName !== "") {
    $("#navuser").html(localName)
    onewebMeet()
  }
}

const updateDocSize = () => {
  $("#docsize").html($(document).width() + "x" + $(document).height())
}

$(document).ready(function () {
  $(".buttonset>a").click(function () {
    console.log($(this))
    $(this).siblings("a").removeClass("selected")
    $(this).addClass("selected")
  })

  updateDocSize()

  if (window.location.search.slice(0, 6) === "?room=") {
    roomId = window.location.search.slice(6)
  }

  if (window.location.protocol === "https:") {
  } else {
    // $('#screen-btn').addClass('disabled')
  }

  $(document).on("click", "#pauseVideo", function () {
    toggleVideo()
  })

  $(document).on("click", "#pauseAudio", function () {
    toggleAudio()
  })

  $(document).on("click", ".mute", function () {
    // unmute
    var id = parseInt($(this).parent().parent().attr("id").slice(7))
    toggleMute(id, false)
    $(this).addClass("unmute").removeClass("mute")
  })

  $(document).on("click", ".unmute", function () {
    // mute
    var id = parseInt($(this).parent().parent().attr("id").slice(7))
    toggleMute(id, true)
    $(this).addClass("mute").removeClass("unmute")
  })

  //TODO:mute others
  $(document).on("dblclick", ".muteShow", function () {
    // mute others
    var muteId = $(this).siblings(".userID").text()
    var msg = {
      type: "force",
    }
    forwardStreamMap.forEach((stream, key) => {
      if (stream.info.owner === muteId && stream.media.audio) {
        if (stream.media.audio.status === "active") {
          pauseStream(roomId, stream.id, "audio", () =>
            chgMutePic(muteId, true)
          )
        } else {
          playStream(roomId, stream.id, "audio", () =>
            chgMutePic(muteId, false)
          )
        }
      }
    })
  })

  $("#text-send").keypress(function (event) {
    if ($(this)[0].scrollHeight > $(this)[0].clientHeight) {
      $(this).height($(this)[0].scrollHeight)
      $("#text-content").css("bottom", $(this)[0].scrollHeight + "px")
    }
    if (event.keyCode === 13) {
      event.preventDefault()
      // send msg when press enter
      sendIm()
    }
  })

  $(window).resize(function () {
    updateDocSize()
  })

  checkMobile()

  setInterval(() => {
    const d = new Date()
    $("#clock").html(getTime() + ":")
    $("#mill").html(d.getMilliseconds())
  }, 1)
})

$(window).on("unload", function () {
  userExit()
})

const checkMobile = () => {
  if (
    /iphone|ipod|android|ie|blackberry|fennec/.test(
      navigator.userAgent.toLowerCase()
    )
  ) {
    isMobile = true
    $("#im-btn").hide()
  }
}

const getTime = () => {
  const time = new Date()
  let hour = time.getHours()
  hour = hour > 9 ? hour.toString() : "0" + hour.toString()
  let mini = time.getMinutes()
  mini = mini > 9 ? mini.toString() : "0" + mini.toString()
  let sec = time.getSeconds()
  sec = sec > 9 ? sec.toString() : "0" + sec.toString()
  return hour + ":" + mini + ":" + sec
}

const toggleVideoUI = () => {
  $("#tvn").toggleClass("block")
  $("#tvb").toggleClass("block")
  toggleVideo()
}

const toggleAudioUI = () => {
  $("#tan").toggleClass("block")
  $("#tab").toggleClass("block")
  toggleAudio()
}

$("#rbclose").on("click", function () {
  $("#bgscontainer").fadeOut()
  $("#right-bar").fadeOut()
})

const toggleBRUI = () => {
  $("#right-bar").fadeIn()

  $("#broff").toggleClass("block")
  $("#bron").toggleClass("block")
  $("#tbr").toggleClass("act")

  if ($("#broff").css("display") == "block") {
    $("#right-bar").fadeIn()
    $("#bgscontainer").fadeIn()
  } else {
    $("#bgscontainer").fadeOut()
    $("#right-bar").fadeOut()
  }
  isbr = !isbr

  if (isbr) {
    isfm = false
    ifh = false
    $("#control-panel").fadeIn()
  }
  if (!isbr && !isfm && !ish) {
    $("#control-panel").fadeOut()
  }
}

$("#mpfm").click(() => {
  isfm = !isfm
  if (isfm) {
    isbr = false
    ish = false
    $("#control-panel").fadeIn()
  }
  if (!isbr && !isfm && !ish) {
    $("#control-panel").fadeOut()
  }
})

$("#mph").click(() => {
  ish = !ish
  if (ish) {
    isbr = false
    isfm = false
    $("#control-panel").fadeIn()
  }
  if (!isbr && !isfm && !ish) {
    $("#control-panel").fadeOut()
  }
})

$("#ocbar").click(() => {
  if ($("#opcanvasdiv").hasClass("x4")) {
    $("#opcanvasdiv").removeClass("x4")
    $("#ocbar").html("4x")
  } else {
    $("#opcanvasdiv").addClass("x4")
    $("#ocbar").html("1x")
  }
})

const userLogin = () => {
  let value = $("#inputjoin").val()
  if (value.length <= 3) {
    console.log("Please enter your user name of at least 3 characters.")
  } else {
    login()
  }
}

$("#inputjoin").on('keypress', function (e) {
  if(e.which === 13){
    userLogin()
  }
})

$("#btnjoin").click(() => {
  userLogin()
})

const checkLeftBar = () => {
  if (
    $("#participants").css("display") == "block" ||
    $("#conversation").css("display") == "block"
  ) {
    $("#left-bar").fadeIn()
    $("footer").addClass("moveleft")
  }

  if (
    $("#participants").css("display") !== "block" &&
    $("#conversation").css("display") !== "block"
  ) {
    $("#left-bar").fadeOut()
    $("footer").removeClass("moveleft")
  }

  if (
    $("#participants").css("display") == "block" &&
    $("#conversation").css("display") !== "block"
  ) {
    $("#user-list").addClass("full")
    $("#text-content").removeClass("full")
  } else if (
    $("#participants").css("display") !== "block" &&
    $("#conversation").css("display") == "block"
  ) {
    $("#user-list").removeClass("full")
    $("#text-content").addClass("full")
  } else {
    $("#user-list").removeClass("full")
    $("#text-content").removeClass("full")
  }
}

const toggleUserList = () => {
  $("#participants").toggle()
  checkLeftBar()
  $("#tuloff").toggleClass("block")
  $("#tulon").toggleClass("block")
}

const toggleMessage = () => {
  $("#conversation").toggle()
  checkLeftBar()
  $("#tmoff").toggleClass("block")
  $("#tmon").toggleClass("block")
}
