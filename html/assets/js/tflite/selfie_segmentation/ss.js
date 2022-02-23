'use strict';

let modelName ='selfiesegmentation';
let layout = 'nchw';
let instanceType = modelName + layout;
let isFirstTimeLoad = true;
let netInstance = null;
let loadTime = 0;
let buildTime = 0;
let computeTime = 0;
let inputOptions;
let outputBuffer;
let modelRunner;

function segmentSemantic() {
  return async (videoFrame, controller) => {
    const inputBuffer = getInputTensor(videoFrame, inputOptions);
    // const inputCanvas = getVideoFrame(inputvideo);
    console.log('- Computing... ');
    const start = performance.now();
    if (instanceType === 'deeplabnchw' || instanceType === 'deeplabnhwc') {
      netInstance.compute(inputBuffer, outputBuffer);
    } else if (instanceType === 'deeplabonnx') {
      outputBuffer = await netInstance.compute(modelRunner, inputBuffer);
    } else {
      outputBuffer = netInstance.compute(modelRunner, inputBuffer);
    }
    computeTime = (performance.now() - start).toFixed(2);
    console.log(`  done in ${computeTime} ms.`);

    await drawOutput(outputBuffer, videoFrame);
    let framefromcanvas = new VideoFrame(outputcanvas, { timestamp: 0 });
    // const barcodes = await detectBarcodes(videoFrame);
    // const newFrame = highlightBarcodes(videoFrame, barcodes);
    videoFrame.close();
    controller.enqueue(framefromcanvas);

    spaninference.html(computeTime)
    let ct = parseInt(computeTime)
    $("#fps").html((1000/ct).toFixed(0))
  };
}

async function renderOriginalStream() {
  inputvideo.srcObject = stream;
  videoAbortController.abort();
  videoAbortController = null;
}

async function renderCamStream() {
  const videoTrack = stream.getVideoTracks()[0];
  const processor = new MediaStreamTrackProcessor({ track: videoTrack });
  const generator = new MediaStreamTrackGenerator({ kind: 'video' });

  const source = processor.readable;
  const sink = generator.writable;
  const transformer = new TransformStream({ transform: segmentSemantic() });
  videoAbortController = new AbortController();
  const signal = videoAbortController.signal;

  const popeThroughPromise = source.pipeThrough(transformer, { signal }).pipeTo(sink);

  popeThroughPromise.catch((e) => {
    if (signal.aborted) {
      console.log('Shutting down streams after abort.');
    } else {
      console.error('Error from stream transform:', e);
    }
    source.cancel(e);
    sink.abort(e);
  });

  const processedStream = new MediaStream();
  processedStream.addTrack(generator);
  inputvideo.srcObject = processedStream;
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
  outputcanvas.width = srcElement.naturalWidth | srcElement.displayWidth;
  outputcanvas.height = srcElement.naturalHeight | srcElement.displayHeight;
  console.log('output Canvas Element:', outputcanvas.width, 'x', outputcanvas.height);
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
    if (isFirstTimeLoad || instanceType !== modelName + layout) {
      instanceType = modelName + layout;
      netInstance = new SefieSegmentation();
      inputOptions = netInstance.inputOptions;
      isFirstTimeLoad = false;
      console.log(`- Model name: ${modelName}, Model layout: ${layout} -`);
      // UI shows model loading progress
      console.log('- Loading SS model... -');
      start = performance.now();
      modelRunner = await netInstance.load();
      loadTime = (performance.now() - start).toFixed(2);
      console.log(`  done in ${loadTime} ms.`);
      // UI shows model building progress

      mSS = true
      let loadedmodels = ''

      if (mRN && mSS) {
        loadedmodels = "SS/NS Loaded"
      } else if (!mRN && mSS) {
        loadedmodels = "SS Loaded"
      } else if (mRN) {
        loadedmodels = "NS Loaded"
      }

      $("#modelloadstatus").html(loadedmodels);
    }
  } catch (error) {
    mSS = false
    $("#modelloadstatus").html('Failed to Load SS Model');
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
