let path;

$(document).ready(function () {
  $("#container").css("display", "none")
  $("#login").fadeIn()

  if(parseSearchParams("mediapipe") === "1") {
    $('#wi-mp').addClass("selected")
    $('#wo-mp').removeClass("selected")
    $('#opcanvasdiv2').addClass("dnone")
    $('#opcanvasdiv2').removeClass("vslot")
    $('#opcanvasdiv').removeClass("dnone")
  } else  {
    $('#wi-mp').removeClass("selected")
    $('#wo-mp').addClass("selected")
    $('#opcanvasdiv').addClass("dnone")
    $('#opcanvasdiv').removeClass("vslot")
    $('#opcanvasdiv2').removeClass("dnone")
  } 

  $('#wi-mp').click(function(){
    mediapipe = "1";
    $('#opcanvasdiv2').addClass("dnone")
    $('#opcanvasdiv2').removeClass("vslot")
    $('#opcanvasdiv').removeClass("dnone")
    path = `?backend=${backend}&mediapipe=1&model=${model}`
    window.history.pushState(null, null, path);
  })

  $('#wo-mp').click(function(){
    mediapipe = "0";
    $('#opcanvasdiv').addClass("dnone")
    $('#opcanvasdiv').removeClass("vslot")
    $('#opcanvasdiv2').removeClass("dnone")
    path = `?backend=${backend}&mediapipe=0&model=${model}`
    window.history.pushState(null, null, path);
  })

  if(parseSearchParams("backend").toLowerCase() === "webgl") {
    $('#btnwasm').removeClass("selected")
    $('#btnwebgl').addClass("selected")
    $('#btnwebnn').removeClass("selected")
  } else if(parseSearchParams("backend").toLowerCase() === "webnn") {
    $('#btnwasm').removeClass("selected")
    $('#btnwebgl').removeClass("selected")
    $('#btnwebnn').addClass("selected")
  } else {
    $('#btnwasm').addClass("selected")
    $('#btnwebgl').removeClass("selected")
    $('#btnwebnn').removeClass("selected")
  }

  $('#btnwasm').click(function(){
    backend = "wasm"
    path = `?backend=wasm&mediapipe=${mediapipe}&model=${model}`
    window.history.pushState(null, null, path);
  })

  $('#btnwebgl').click(function(){
    backend = "webgl"
    path = `?backend=webgl&mediapipe=${mediapipe}&model=${model}`
    window.history.pushState(null, null, path);
  })

  $('#btnwebnn').click(function(){
    backend = "webnn"
    path = `?backend=webnn&mediapipe=${mediapipe}&model=${model}`
    window.history.pushState(null, null, path);
  })

if(parseSearchParams("model").toLowerCase() === "0") {
    $('#btndl').removeClass("selected")
    $('#btnss').addClass("selected")
    $('#btnssl').removeClass("selected")
  } else if (parseSearchParams("model").toLowerCase() === "1") {
    $('#btndl').removeClass("selected")
    $('#btnss').removeClass("selected")
    $('#btnssl').addClass("selected")
  } else {
    $('#btndl').addClass("selected")
    $('#btnss').removeClass("selected")
    $('#btnssl').removeClass("selected")
  }

  $('#btndl').click(function(){
    model = "2"
    path = `?backend=${backend}&mediapipe=${mediapipe}&model=2`
    window.history.pushState(null, null, path);
  })

  $('#btnss').click(function(){
    model = "0"
    path = `?backend=${backend}&mediapipe=${mediapipe}&model=0`
    window.history.pushState(null, null, path);
  })

  $('#btnssl').click(function(){
    model = "1"
    path = `?backend=${backend}&mediapipe=${mediapipe}&model=1`
    window.history.pushState(null, null, path);
  })

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
    console.log(mediapipe)
    if(mediapipe === "1") {
      oneWebMeetMediaPipe()
    } else {
      oneWebMeetOWT()
    }
  }
}

const fullscreen = () => {
  isfullscreen = document.fullscreenElement && document.fullscreenElement !== null

  var docElm = document.documentElement;
  if (!isfullscreen) {
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
        document.exitFullscreen()
    }
  }
  isfullscreen = !isfullscreen
  console.log("Fullscren :" + isfullscreen)
}

const updateDocSize = () => {
  $("#docsize").html($(document).width() + "x" + $(document).height())
}

const remotefullscreen = (e) => {
  fullscreen()    
  $("#video-panel .vslot").removeClass("streamfull")
  $(e).parent().parent().addClass("streamfull")
  $("#video-panel .vslot").removeClass("zerosize")
  $(e).parent().parent().addClass("zerosize")
  $('body').addClass("fullscreen")
}

const switchfullscreen = (e) => {
  $("#video-panel .vslot").removeClass("streamfull")
  $(e).parent().addClass("streamfull")
  $("#video-panel .vslot").removeClass("zerosize")
  $(e).parent().addClass("zerosize")
}

$(document).ready(function () {
  $(".buttonset>a").click(function () {
    $(this).siblings("a").removeClass("selected")
    $(this).addClass("selected")
  })

  updateDocSize()

  selfieSegmentation.setOptions({
    modelSelection: parseInt(model),
  });

  $(".btnfullscreen").click(function () {
    fullscreen()    
    $("#video-panel .vslot").removeClass("streamfull")
    $(this).parent().parent().addClass("streamfull")
    $("#video-panel .vslot").removeClass("zerosize")
    $(this).parent().parent().addClass("zerosize")
    $('body').addClass("fullscreen")
  })

  $("#btnexitfullscreen").click(function(){
    fullscreen()
    $("#video-panel .vslot").removeClass("streamfull")
    $("#video-panel .vslot").removeClass("streamfull")
    $("#video-panel .vslot").removeClass("zerosize")
    $('body').removeClass("fullscreen")
  })

  $(document).on("click", "#pauseVideo", function () {
    toggleVideo()
  })

  $(document).on("click", "#pauseAudio", function () {
    toggleAudio()
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

  setInterval(() => {
    const d = new Date()
    $("#clock").html(getTime() + ":")
    $("#mill").html(d.getMilliseconds())
  }, 1)
})

$(window).on("unload", function () {
  userExit()
})
 
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
  $("#bgscontainer").hide()
  $("#right-bar").hide()
  $("#ic").addClass('norightbar')
})

const showModelInfo = () => {
  
  let modelindex = ssmodelinfo[parseInt(model)]
  let modelinfo = `
    ${modelindex.inputsize}<br/>
    ${modelindex.format} / ${modelindex.size}<br/>
    ${modelindex.name}
  `
  $('#model').html(modelinfo)
}

const toggleBBUI = () => {
  $("#bboff").toggleClass("block")
  $("#bbon").toggleClass("block")
  $("#tbb").toggleClass("act")

  isbb = !isbb

  if (isbb) {
    $("#control-panel").fadeIn()
    showModelInfo()
  } 
  if (!isbr && !isbb) {
    $("#control-panel").fadeOut()
  }
}

const toggleBRUI = () => {
  $("#right-bar").fadeIn()

  $("#broff").toggleClass("block")
  $("#bron").toggleClass("block")
  $("#tbr").toggleClass("act")

  if ($("#broff").css("display") == "block") {
    $("#right-bar").fadeIn()
    $("#ic").removeClass('norightbar')
    $("#bgscontainer").fadeIn()
  } else {
    $("#bgscontainer").hide()
    $("#ic").addClass('norightbar')
    $("#right-bar").hide()
  }
  isbr = !isbr

  if (isbr) {
    $("#control-panel").fadeIn()
    showModelInfo()
  } 
  if (!isbr && !isbb) {
    $("#control-panel").fadeOut()
  }
}

$("#ebeauty").click(() => {
  isbeauty = !isbeauty
})

$("#ocbar").click(() => {
  if ($("#opcanvasdiv").hasClass("x4")) {
    $("#opcanvasdiv").removeClass("x4")
    $("#ocbar").html("9x")
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
