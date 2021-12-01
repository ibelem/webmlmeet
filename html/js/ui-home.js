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
let model = "dl"
let backend = "wasm"
let ds = 0
let mi = '3'

// const obj = {
//   backend: "wasm",
//   model: 2,
// }

$(document).ready(function () {
  $("#login").fadeIn(1000)
  $(".logos").fadeIn(1500)

  $("#wi-mp").click(function () {
    $("#wo-mp").removeClass("selected")
    $("#wi-mp").addClass("selected")
    path = "tflite-mp"
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "ss"
    $("#btndl").hide()
    $("#btnss").parent().removeClass("vr").addClass("vm")
    // window.history.pushState(null, null, path)
    mi = "ss"

  })

  $("#wo-mp").click(function () {
    $("#wo-mp").addClass("selected")
    $("#wi-mp").removeClass("selected")
    path = "tflite"
    $("#btndl").addClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").removeClass("selected")
    model = "ss"
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
    model = "dl"
    mi = '3'
  })

  $("#btnss").click(function () {
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "ss"
    mi = 'ss'
  })

  $("#btnssl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btndl").removeClass("selected")
    $("#btnssl").addClass("selected")
    model = "ss"
    mi = 'ssl'
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
    
    console.log(`${path}-${model}?usr=${usr}&b=${backend}&d=${ds}&i=${mi}`)
    location.href = `${path}-${model}?usr=${usr}&b=${backend}&d=${ds}&i=${mi}`
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
