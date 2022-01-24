'use strict';

let instanceType = "deeplabtflite";
let isFirstTimeLoad = true;
let netInstance = null;
let loadTime = 0;
let buildTime = 0;
let computeTime = 0;
let inputOptions;
let outputBuffer;
let modelRunner;

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

async function renderCamStream() {
  if(inputvideo.readyState === 0) {
    rafReq = requestAnimationFrame(renderCamStream);
    return;
  }
  const inputBuffer = getInputTensor(inputvideo, inputOptions);
  const inputCanvas = getVideoFrame(inputvideo);
  console.log('- Computing... ');
  const start = performance.now();
  outputBuffer = netInstance.compute(modelRunner, inputBuffer);
  computeTime = (performance.now() - start).toFixed(2);
  console.log(`  done in ${computeTime} ms.`);
  await drawOutput(outputBuffer, inputCanvas);

  if(continueAnimating)
  {
    rafReq = requestAnimationFrame(renderCamStream);
    spaninference.html(computeTime)
    let ct = parseInt(computeTime)
    $("#fps").html((1000/ct).toFixed(0))
  }
}

async function drawOutput(outputBuffer, srcElement) {
  if (instanceType.startsWith('deeplab')) {
    outputBuffer = tf.tidy(() => {
      const a = tf.tensor(outputBuffer, netInstance.outputDimensions, 'float32');
      let axis = 3;
      if (instanceType === 'deeplabnchw') {
        axis = 1;
      }
      const b = tf.argMax(a, axis);
      const c = tf.tensor(b.dataSync(), b.shape, 'float32');
      return c.dataSync();
    });
  }
  console.log('output: ', outputBuffer);
  outputcanvas.width = srcElement.naturalWidth | srcElement.width;
  outputcanvas.height = srcElement.naturalHeight | srcElement.height;
  const pipeline = buildWebGL2Pipeline(
    srcElement,
    backgroundImageSource,
    backgroundType,
    inputOptions.inputResolution,
    outputcanvas,
    outputBuffer,
  );
  const postProcessingConfig = {
    smoothSegmentationMask: true,
    jointBilateralFilter: {sigmaSpace: 1, sigmaColor: 0.1},
    coverage: [0.5, 0.75],
    lightWrapping: 0.3,
    blendMode: 'screen',
  }
  pipeline.updatePostProcessingConfig(postProcessingConfig);
  await pipeline.render();
}

async function ssLoad() {
  try {
    let start;
    // Only do load() and build() when model first time loads and
    // there's new model choosed
    if (isFirstTimeLoad) {
      netInstance = new DeepLabV3MNV2TFLite();
      inputOptions = netInstance.inputOptions;
      isFirstTimeLoad = false;
      console.log(`- Model name: ${instanceType} -`);
      // UI shows model loading progress
      console.log('- Loading DL model... -');
      start = performance.now();
      modelRunner = await netInstance.load();
      loadTime = (performance.now() - start).toFixed(2);
      console.log(`  done in ${loadTime} ms.`);
      // UI shows model building progress

      mDL = true
      let loadedmodels = ''

      if (mRN && mDL) {
        loadedmodels = "DL/NS Models Loaded"
      } else if (!mRN && mDL) {
        loadedmodels = "DL Model Loaded"
      } else if (mRN) {
        loadedmodels = "NS Model Loaded"
      }

      $("#modelloadstatus").html(loadedmodels);
      $("#tbb").prop('disabled', false);
      $("#tbr").prop('disabled', false);
      $("#tbb").removeClass('disabled');
      $("#tbr").removeClass('disabled');
    }
  } catch (error) {
    mDL = false
    $("#modelloadstatus").html('Failed to Load DL Model');
    $("#tbb").prop('disabled', true);
    $("#tbr").prop('disabled', true);
    $("#tbb").addClass('disabled');
    $("#tbr").addClass('disabled');
    console.log(error);
  }
}

async function ssCompute() {
  try {
    inputvideo.onloadeddata = await renderCamStream();
  } catch (error) {
    console.log(error);
  }
}
