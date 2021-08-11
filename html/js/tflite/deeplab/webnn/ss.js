'use strict';

let modelName ='deeplabv3mnv2';
let layout = 'nchw';
let instanceType = modelName + layout;
let isFirstTimeLoad = true;
let netInstance = null;
let labels = null;
let loadTime = 0;
let buildTime = 0;
let computeTime = 0;
let inputOptions;
let outputBuffer;
let hoverPos = null;
let modelRunner;
 
// $('#modelBtns .btn').on('change', async (e) => {
//   modelName = $(e.target).attr('id');
//   if (inputType === 'camera') cancelAnimationFrame(rafReq);
//   await main();
// });

async function fetchLabels(url) {
  const response = await fetch(url);
  const data = await response.text();
  return data.split('\n');
}

function stopCamera() {
  stream.getTracks().forEach((track) => {
    if (track.readyState === 'live' && track.kind === 'video') {
      track.stop();
    }
  });
}

/**
 * This method is used to render live camera tab.
 */
async function renderCamStream() {
  const inputBuffer = getInputTensor(inputvideo, inputOptions);
  console.log('- Computing... -');
  const start = performance.now();
  outputBuffer = netInstance.compute(modelRunner, inputBuffer);
  computeTime = (performance.now() - start).toFixed(2);
  console.log(`  done in ${computeTime} ms.`);
  await drawOutput(outputBuffer, inputvideo);

  // rafReq = requestAnimationFrame(renderCamStream);
 
  if(continueAnimating)
  {
    requestAnimationFrame(renderCamStream); 
    spaninference.html(computeTime)
    let ct = parseInt(computeTime)
    $("#fps").html((1000/ct).toFixed(0))
  }
}
 

async function drawOutput(outputBuffer, srcElement) {
  const a = tf.tensor(outputBuffer, netInstance.outputDimensions, 'float32');
  const b = tf.argMax(a, 3);
  const buffer = await b.buffer();
  tf.dispose();
  const argMaxBuffer = buffer.values;
  const outputShape = b.shape;

  const width = inputOptions.inputDimensions[2];
  const imWidth = srcElement.naturalWidth | srcElement.videoWidth;
  const imHeight = srcElement.naturalHeight | srcElement.videoHeight;
  const resizeRatio = Math.max(Math.max(imWidth, imHeight) / width, 1);
  const scaledWidth = Math.floor(imWidth / resizeRatio);
  const scaledHeight = Math.floor(imHeight / resizeRatio);

  const segMap = {
    data: argMaxBuffer,
    outputShape: outputShape,
    labels: labels,
  };

  renderer.backgroundImageSource = bg

  console.log([scaledWidth, scaledHeight])
  console.log(segMap)
  renderer.uploadNewTexture(srcElement, [scaledWidth, scaledHeight]);
  renderer.drawOutputs(segMap);
}

async function ss() {
  try {
    let start;
    // Only do load() and build() when model first time loads and
    // there's new model choosed
    if (isFirstTimeLoad || instanceType !== modelName + layout) {
      instanceType = modelName + layout;
      netInstance = new DeepLabV3MNV2();
      inputOptions = netInstance.inputOptions;
      labels = await fetchLabels(inputOptions.labelUrl);
      isFirstTimeLoad = false;
      console.log(`- Model name: ${modelName}, Model layout: ${layout} -`);
      // UI shows model loading progress
      console.log('- Loading model... -');
      start = performance.now();
      modelRunner = await netInstance.load();
      loadTime = (performance.now() - start).toFixed(2);
      console.log(`  done in ${loadTime} ms.`);
      // UI shows model building progress
    }
    inputvideo.onloadedmediadata = await renderCamStream();
 
  } catch (error) {
    console.log(error);
  }
}
