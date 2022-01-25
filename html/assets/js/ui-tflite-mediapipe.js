
$(document).ready(function () {
    localname = parseSearchParams("usr")
    $("#navuser").html(localname)
    $("#localname").html(localname)
    $("#localnamefs").html(localname)
    optionsLink(localname);

    selfieSegmentation.setOptions({
        modelSelection: parseInt(model),
    });

    if(location.pathname.toLowerCase().indexOf('ss') > -1) {
      $("#tbb").prop('disabled', false);
      $("#tbr").prop('disabled', false);
      $("#tbb").removeClass('disabled');
      $("#tbr").removeClass('disabled');
    }
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
    if (!isns) $("#ns-panel").hide()
  
    isbb = !isbb
  
    if (isbb) {
      $("#control-panel").fadeIn()
      $("#ss-panel").show()
      showModelInfo()
    } 
    
    if (!isbr && !isbb) {
      $("#ss-panel").hide()
    }

    if (!isbr && !isbb && !isns) {
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
    if (!isns) $("#ns-panel").hide()
    isbr = !isbr
  
    if (isbr) {
      $("#control-panel").fadeIn()
      $("#ss-panel").show()
      showModelInfo()
    } 

    if (!isbr && !isbb) {
      $("#ss-panel").hide()
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

const exitMeeting = () => {
    userExit();
    location.href = '../index.html';
}
