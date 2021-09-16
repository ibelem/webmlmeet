const encodeSearchParams = (obj) => {
  const params = []
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    if (typeof value === "undefined") {
      value = ""
    }
    params.push([key, encodeURIComponent(value)].join("="))
  })
  return params.join("&")
}

const isWebML = () => {
  if (navigator.ml) {
    if (!navigator.ml.isPolyfill) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

let path = "tflite"
let model = "deeplab"
let backend = "wasm"
let ds = 0

// const obj = {
//   backend: "wasm",
//   model: 2,
// }

$(document).ready(function () {
  $("#login").fadeIn(1000)
  $(".logos").fadeIn(1500)

  $("#btnwebgl").dis

  $("#wi-mp").click(function () {
    $("#wo-mp").removeClass("selected")
    $("#wi-mp").addClass("selected")
    path = "tflite-mediapipe"
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "selfiesegmentation"
    $("#btndl").hide()
    $("#btnss").parent().removeClass("vr").addClass("vm")
    // window.history.pushState(null, null, path)

  })

  $("#wo-mp").click(function () {
    $("#wo-mp").addClass("selected")
    $("#wi-mp").removeClass("selected")
    path = "tflite"
    $("#btndl").addClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").removeClass("selected")
    model = "selfiesegmentation"
    $("#btndl").show()
    $("#btnss").parent().removeClass("vm").addClass("vr")
  })

  $("#btnwasm").click(function () {
    $("#btnwebnn").removeClass("selected")
    $("#btnwebnngpu").removeClass("selected")
    $("#btnwebgl").removeClass("selected")
    $("#btnwasm").addClass("selected")
    backend = "wasm"
  })

  $("#btnwebgl").click(function () {
    $("#btnwasm").removeClass("selected")
    $("#btnwebnn").removeClass("selected")
    $("#btnwebnngpu").removeClass("selected")
    $("#btnwebgl").addClass("selected")
    backend = "webgl"
  })

  $("#btnwebnn").click(function () {
    $("#btnwasm").removeClass("selected")
    $("#btnwebgl").removeClass("selected")
    $("#btnwebnngpu").removeClass("selected")
    $("#btnwebnn").addClass("selected")
    backend = "webnn"
    ds = 2
  })

  $("#btnwebnngpu").click(function () {
    $("#btnwasm").removeClass("selected")
    $("#btnwebgl").removeClass("selected")
    $("#btnwebnn").removeClass("selected")
    $("#btnwebnngpu").addClass("selected")
    backend = "webnn"
    ds = 1
  })

  $("#btndl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btndl").addClass("selected")
    model = "deeplab"
  })

  $("#btnss").click(function () {
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "selfiesegmentation"
  })

  $("#btnssl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btndl").removeClass("selected")
    $("#btnssl").addClass("selected")
    model = "selfiesegmentationlandscape"
  })

  if (!isWebML()) {
    $('#WebML').addClass('dnone');
    $('#l-WebML').addClass('dnone');
    $('#webmlstatus').addClass('webml-status-false').html('not supported');
  } else {
    $('#WebML').removeClass('dnone');
    $('#l-WebML').removeClass('dnone');
    $('#webmlstatus').addClass('webml-status-true').html('supported');
  }
})

const go = () => {
  let value = $("#inputjoin").val()
  if (value.length <= 1) {
    console.log("Please enter your user name of at least 2 characters.")
    $('#cnote').fadeIn()
    return
  }

  if (value.length > 1) {
    $('#cnote').hide()
    // search = encodeSearchParams(obj)
    let usr = $("#inputjoin").val()
    
    console.log(`${path}-${backend}-${model}?usr=${usr}&ds=${ds}`)
    location.href = `${path}-${backend}-${model}?usr=${usr}&ds=${ds}`
  }
}

$("#inputjoin").on("keypress", function (e) {
    console.log(e.which)
  if (e.which === 13) {
    e.preventDefault()
    go()
  }
})

$("#btnjoin").click(() => {
  go()
})
