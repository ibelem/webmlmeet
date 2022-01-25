import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

const audioMotion = new AudioMotionAnalyzer(
document.querySelector('#originwave'),
{
    gradient: 'rainbow',
    height: 26,
    width: 120,
    mode:1,
    showScaleX: false,
    showScaleY: false,
    overlay: true,
    showBgColor: false
}
);


const audioMotionProcessed = new AudioMotionAnalyzer(
document.querySelector('#processedwave'),
{
    gradient: 'rainbow',
    height: 26,
    width: 120,
    mode:1,
    showScaleX: false,
    showScaleY: false,
    showPeaks: true,
    overlay: true,
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