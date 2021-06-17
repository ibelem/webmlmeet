const videoElement = $("#inputvideo")[0];
const cW = $("#outputcanvas")[0].width;
const cH = $("#outputcanvas")[0].height;
const canvasCtx = $("#outputcanvas")[0].getContext("2d");

let activeEffect = "background";
const fillColor = "rgba(204, 255, 144, 1.0)";

function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, cW, cH);
  canvasCtx.drawImage(results.segmentationMask, 0, 0, cW, cH);

  // Only overwrite existing pixels.
  // Only overwrite existing pixels.
  canvasCtx.globalCompositeOperation = "source-in";
  if (activeEffect === "mask" || activeEffect === "both") {
    // This can be a color or a texture or whatever...
    canvasCtx.fillStyle = fillColor;
    canvasCtx.fillRect(0, 0, cW, cH);
  } else {
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      cW,
      cH
    );
  }

  // Only overwrite missing pixels.
  canvasCtx.globalCompositeOperation = "destination-atop";
  if (activeEffect === "background" || activeEffect === "both") {
    // This can be a color or a texture or whatever...
    canvasCtx.fillStyle = fillColor;
    canvasCtx.fillRect(0, 0, cW, cH);
  } else {
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      cW,
      cH
    );
  }

  canvasCtx.restore();
}

const selfieSegmentation = new SelfieSegmentation({
  locateFile: (file) => {
    console.log(file)
    return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`;
  },
});
selfieSegmentation.setOptions({
  modelSelection: 1,
});
selfieSegmentation.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await selfieSegmentation.send({ image: videoElement });
  },
  width: 1280,
  height: 720,
});
camera.start();
