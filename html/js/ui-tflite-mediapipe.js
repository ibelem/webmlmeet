
$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)
    $("#localname").html(localname)
    $("#localnamefs").html(localname)
    optionsLink(localname);

    selfieSegmentation.setOptions({
        modelSelection: parseInt(model),
    });
})

$(window).on("load", function () {
  oneWebMeetMediaPipe();
});

$(".mega-drop-down").hover(function () {
  $(".mega-menu").addClass('dgrid');
  $(".mega-menu").fadeIn(1000)
})

$(".mega-menu").on("mouseleave", function () {
  $(".mega-menu").removeClass('dgrid');
  $(".mega-menu").fadeOut(3000)
})

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

const exit = () => {
    userExit();
    location.href = '../index.html';
}
