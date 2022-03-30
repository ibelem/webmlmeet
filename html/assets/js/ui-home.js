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
  $("#home .logos").fadeIn(1500)

  // $("#btnjoin").hover(function() {
  //   $("#pv").addClass("pvshow");
  // }, function() {
  //   $("#pv").removeClass("pvshow");
  // })

  $("#btnort").click(function () {
    $("#wi-mp").removeClass("selected");
    $("#wo-mp").addClass("selected");
    $("#btntflite").removeClass("selected");
    $("#btnort").addClass("selected");
    $("#btndl321").parent().removeClass("vf").removeClass("vm").addClass("vo")
    $("#btnss").hide()
    $("#btnssl").hide()
    $("#btndl321").show()
    $("#btndl513").show()
    $("#btndl321").addClass("selected")
    path = "ort"
    model = "dl"
    mi = "3"

    $("#btnwebnn").show()
    $("#btnwebnngpu").show()
    $("#btnwasm").parent().removeClass("vfull").removeClass("vo").removeClass("vm").addClass("vr")
  })

  $("#btntflite").click(function () {
    $("#btntflite").addClass("selected");
    $("#btnort").removeClass("selected");
    $("#btndl321").parent().removeClass("vm").removeClass("vo").addClass("vf")
    $("#btnss").show()
    $("#btnssl").show()
    $("#btndl321").show()
    $("#btndl513").show()
    path = "tflite"
  })

  $("#wi-mp").click(function () {
    $("#wo-mp").removeClass("selected")
    $("#wi-mp").addClass("selected")

    $("#btnwebnn").hide()
    $("#btnwebnngpu").hide()
    $("#btnwasm").removeClass("selected").addClass("selected")
    $('#btnwebnn').removeClass("selected")
    $('#btnwebnngpu').removeClass("selected")
    $("#btnwasm").parent().removeClass("vr").removeClass("vo").removeClass("vm").addClass("vfull")

    path = "tflite-mp"
    $("#btnort").removeClass("selected")
    $("#btntflite").addClass("selected")
    $("#btndl321").removeClass("selected")
    $("#btndl513").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "ss"
    $("#btnss").show()
    $("#btnssl").show()
    $("#btndl321").hide()
    $("#btndl513").hide()
    $("#btnss").parent().removeClass("vf").removeClass("vo").addClass("vm")
    // window.history.pushState(null, null, path)
    mi = "ss"
  })

  $("#wo-mp").click(function () {
    $("#wo-mp").addClass("selected")
    $("#wi-mp").removeClass("selected")

    $("#btnwebnn").show()
    $("#btnwebnngpu").show()
    $("#btnwasm").removeClass("selected").addClass("selected")
    $("#btnwasm").parent().removeClass("vfull").removeClass("vo").removeClass("vm").addClass("vr")

    path = "tflite"
    $("#btnssl").removeClass("selected")
    $("#btnss").removeClass("selected")
    $("#btndl321").addClass("selected")
    $("#btndl513").removeClass("selected")
    model = "dl"
    mi = "3"
    $("#btndl321").show()
    $("#btndl513").show()
    $("#btnss").parent().removeClass("vo").removeClass("vm").addClass("vf")
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

  $("#btndl321").click(function () {
    $("#btnss").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btndl513").removeClass("selected")
    $("#btndl321").addClass("selected")
    model = "dl"
    mi = '3'
  })

  $("#btndl513").click(function () {
    $("#btnss").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btndl321").removeClass("selected")
    $("#btndl513").addClass("selected")
    model = "dl"
    mi = '5'
  })

  $("#btnss").click(function () {
    $("#btndl321").removeClass("selected")
    $("#btndl513").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    model = "ss"
    mi = 'ss'
  })

  $("#btnssl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btndl321").removeClass("selected")
    $("#btndl513").removeClass("selected")
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
  if (e.which === 13) {
    e.preventDefault()
    go()
  }
})

$("#btnjoin").click(() => {
  go()
})
