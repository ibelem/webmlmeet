import AudioMotionAnalyzer from './audiomotion-analyzer/audioMotion-analyzer.js';

const audioMotion = new AudioMotionAnalyzer(
document.querySelector('#originalwave'),
{
    gradient: 'rainbow',
    height: 22,
    width: 80,
    mode:1,
    showScaleX: false,
    showScaleY: false,
    showPeaks: false,
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
    showPeaks: false,
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

let isLargeWaveform = false
$("#mstracklabel").click(
    function(){
        if (isLargeWaveform) {
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
            isLargeWaveform = !isLargeWaveform;
        } else {
    
            $("#denoisecontainer").removeClass("nslarge");
            $("#denoisecontainer").fadeIn();
            audioMotion.setOptions({ 
                height: 22,
                width: 80,
                showPeaks: false,
                showScaleX: false,
                showScaleY: false,
            });
            audioMotionProcessed.setOptions({ 
                height: 22,
                width: 80,
                showPeaks: false,
                showScaleX: false,
                showScaleY: false
            });
            isLargeWaveform = !isLargeWaveform;
        }
    }
);