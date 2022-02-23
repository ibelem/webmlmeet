$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)
    $("#localname").html(localname)
    $("#localnamefs").html(localname)
    let ds = parseSearchParams("d")
    let dsname = ''
    if(ds === '2') dsname = "CPU"
    if(ds === '1') dsname = "GPU"
    $('#deviceselection').html(dsname)
    optionsLink(localname);

    if(location.pathname.toLowerCase().indexOf('-ss') > -1) {
      $("#tbb").prop('disabled', false);
      $("#tbr").prop('disabled', false);
      $("#tbb").removeClass('disabled');
      $("#tbr").removeClass('disabled');
    }
})

$(window).on("load", function () {
  oneWebMeetOWT();
});

$(".mega-drop-down").hover(function () {
  $(".mega-menu").addClass('dgrid');
  $(".mega-menu").fadeIn()
})

$(".mega-menu").on("mouseleave", function () {
  $(".mega-menu").removeClass('dgrid');
  $(".mega-menu").fadeOut()
})

const exitMeeting = () => {
    userExit();
    location.href = '../index.html';
}

const toggleBBUI = async () => {
  $("#bboff").toggleClass("block")
  $("#bbon").toggleClass("block")
  $("#tbb").toggleClass("act")
  if (!isns) $("#ns-panel").hide()

  isbb = !isbb

  if (isbb) {
    $("#control-panel").fadeIn()
    $("#ss-panel").show()
    showModelInfo()
    isSS = true
    effect = "blur"
    ssConfig(isSS, effect)
  } 
  if (!isbr && !isbb) {
    $("#ss-panel").hide()
    isSS = false
    ssConfig(isSS, effect)
    await renderOriginalStream()
  }
  if (!isbr && !isbb && !isns) {
    $("#control-panel").fadeOut()
  }
}

const toggleBRUI = async () => {
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

  if (!isns) $("#ns-panel").hide()
  isbr = !isbr

  if (isbr) {
    $("#control-panel").fadeIn()
    $("#ss-panel").show()
    showModelInfo()
    isSS = true
    effect = "image"
    ssConfig(isSS, effect)
  } 
  if (!isbr && !isbb) {
    $("#ss-panel").hide()
    isSS = false
    ssConfig(isSS, effect)
    await renderOriginalStream()
  }
  if (!isbr && !isbb && !isns) {
    $("#control-panel").fadeOut()
  }
}

const toggleNSUI = async () => {
  if(!isPauseAudio) {
    $("#nsoff").toggleClass("block")
    $("#nson").toggleClass("block")
    $("#tns").toggleClass("act")
    if (!isbr && !isbb) {
      $("#ss-panel").hide()
    }

    isns = !isns

    if (isns) {
      await denoise()
      if(isbb || isbr || isns) {
        $("#control-panel").fadeIn()
      }    
      $("#ns-panel").show()
      // showModelInfo()
      // isSS = true
      // effect = "blur"
      // ssConfig(isSS, effect)
    } else {
      await originalAudio()
      $("#ns-panel").hide()
      if (!isbr && !isbb && !isns) {
        $("#control-panel").fadeOut()
      }
    }
  }
}
