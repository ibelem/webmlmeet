import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

const audioMotion = new AudioMotionAnalyzer(
document.querySelector('#originalwave'),
{
    gradient: 'rainbow',
    height: 22,
    width: 80,
    mode:1,
    showScaleX: false,
    showScaleY: false,
    showPeaks: true,
    overlay: true,
    bgAlpha: 0,
    showBgColor: false
}
);


const audioMotionProcessed = new AudioMotionAnalyzer(
document.querySelector('#processedwave'),
{
    gradient: 'rainbow',
    height: 22,
    width: 80,
    mode:1,
    showScaleX: false,
    showScaleY: false,
    showPeaks: true,
    overlay: true,
    bgAlpha: 0,
    showBgColor: false
}
);

$(document).on("click", "#tns", function () {
    if(isns) {
        const originStream = audioMotion.audioCtx.createMediaStreamSource(stream);
        audioMotion.connectInput(originStream);
        audioMotion.volume = 0;
        audioMotion.setFreqRange(50, 10000);

        const processedStream = audioMotionProcessed.audioCtx.createMediaStreamSource(processedstream);
        audioMotionProcessed.connectInput(processedStream);
        audioMotionProcessed.volume = 0;
        audioMotionProcessed.setFreqRange(50, 10000);      
    } else {
        audioMotion.disconnectInput();
        audioMotionProcessed.disconnectInput();
    }
})

$("#mstracklabel").mouseover(
    function() {
        $("#denoisecontainer").addClass("nslarge");
        $("#denoisecontainer").fadeIn();
        audioMotion.setOptions({ 
            height: 220,
            width: 400,
            showPeaks: true,
            showScaleX: true,
            showScaleY: true
        });
        audioMotionProcessed.setOptions({ 
            height: 220,
            width: 400,
            showPeaks: true,
            showScaleX: true,
            showScaleY: true
        });
    }
);

$("#mstracklabel").mouseout(
    function() {
        $("#denoisecontainer").removeClass("nslarge");
        $("#denoisecontainer").fadeIn();
        audioMotion.setOptions({ 
            height: 22,
            width: 80,
            showPeaks: true,
            showScaleX: false,
            showScaleY: false,
        });
        audioMotionProcessed.setOptions({ 
            height: 22,
            width: 80,
            showPeaks: true,
            showScaleX: false,
            showScaleY: false
        });
    }
);