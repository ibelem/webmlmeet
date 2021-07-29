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

let path = "tflite"
let search = "?backend=wasm&model=2"

const obj = {
  backend: "wasm",
  model: 2,
}

$(document).ready(function () {
  $("#login").fadeIn(1000)

  $("#wi-mp").click(function () {
    $("#wo-mp").removeClass("selected")
    $("#wi-mp").addClass("selected")
    path = "tflite-mediapipe"
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    obj.model = "0"
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
    $("#btndl").show()
    $("#btnss").parent().removeClass("vm").addClass("vr")
  })

  $("#btnwasm").click(function () {
    $("#btnwebnn").removeClass("selected")
    $("#btnwebgl").removeClass("selected")
    $("#btnwasm").addClass("selected")
    obj.backend = "wasm"
  })

  $("#btnwebgl").click(function () {
    $("#btnwasm").removeClass("selected")
    $("#btnwebnn").removeClass("selected")
    $("#btnwebgl").addClass("selected")
    obj.backend = "webgl"
  })

  $("#btnwebnn").click(function () {
    $("#btnwasm").removeClass("selected")
    $("#btnwebgl").removeClass("selected")
    $("#btnwebnn").addClass("selected")
    obj.backend = "webnn"
  })

  $("#btndl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btndl").addClass("selected")
    obj.model = "2"
  })

  $("#btnss").click(function () {
    $("#btndl").removeClass("selected")
    $("#btnssl").removeClass("selected")
    $("#btnss").addClass("selected")
    obj.model = "0"
  })

  $("#btnssl").click(function () {
    $("#btnss").removeClass("selected")
    $("#btndl").removeClass("selected")
    $("#btnssl").addClass("selected")
    obj.model = "1"
  })
})

const go = () => {
  let value = $("#inputjoin").val()
  if (value.length <= 3) {
    console.log("Please enter your user name of at least 3 characters.")
    $('#cnote').fadeIn()
    return
  }

  if (value.length > 3) {
    $('#cnote').hide()
    search = encodeSearchParams(obj)
    let usr = $("#inputjoin").val()
    
    console.log(`${path}?${search}&usr=${usr}`)
    location.href = `${path}?${search}&usr=${usr}`
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
