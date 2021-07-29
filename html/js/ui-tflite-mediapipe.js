
$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)

    selfieSegmentation.setOptions({
        modelSelection: parseInt(model),
    });
})

$(window).on("load", function () {
  oneWebMeetMediaPipe();
});

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
    location.href = '../';
}
