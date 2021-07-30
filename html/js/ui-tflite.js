
$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)
})

$(window).on("load", function () {
  oneWebMeetOWT();
});

const exit = () => {
    userExit();
    location.href = '../';
}

const toggleBBUI = () => {
  $("#bboff").toggleClass("block")
  $("#bbon").toggleClass("block")
  $("#tbb").toggleClass("act")

  isbb = !isbb

  if (isbb) {
    $("#control-panel").fadeIn()
    showModelInfo()
    isSS = true
    effect = "blur"
    ssConfig(isSS, effect)
    $("#outputcanvas").removeClass("dnone");
    $("#outputcanvas2d").addClass("dnone");
  } 
  if (!isbr && !isbb) {
    $("#control-panel").fadeOut()
    isSS = false
    ssConfig(isSS, effect)
    $("#outputcanvas").addClass("dnone");
    $("#outputcanvas2d").removeClass("dnone");
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
    isSS = true
    effect = "image"
    ssConfig(isSS, effect)
    $("#outputcanvas").removeClass("dnone");
    $("#outputcanvas2d").addClass("dnone");
  } 
  if (!isbr && !isbb) {
    $("#control-panel").fadeOut()
    isSS = false
    ssConfig(isSS, effect)
    $("#outputcanvas").addClass("dnone");
    $("#outputcanvas2d").removeClass("dnone");
  }
}
