import { Processer } from './processer.js';
import { RNNoiseONNX } from './rnnoise_onnx.js';

const rnnoise = new RNNoiseONNX();
const audioProcesser = new Processer(rnnoise.steps);

// Dynamically load the DSP library (Wasm).
const wasmScript = document.createElement('script');
wasmScript.type = 'text/javascript';
wasmScript.onload = function () {
  console.log('DSP library (Wasm) Preparing ...');
  Module.onRuntimeInitialized = function () {
    console.log('DSP library (Wasm) Loaded.');
  };
};
wasmScript.src = 'process/process.js';
document.getElementsByTagName('head')[0].appendChild(wasmScript);

// Global MediaStreamTrackProcessor, MediaStreamTrackGenerator, AudioData.
if (typeof MediaStreamTrackProcessor === 'undefined' ||
  typeof MediaStreamTrackGenerator === 'undefined') {
  alert(
    'Your browser does not support the MediaStreamTrack API for ' +
    'Insertable Streams of Media.');
}
try {
  new MediaStreamTrackGenerator('audio');
  console.log('Audio insertable streams supported.');
} catch (e) {
  alert('Your browser does not support insertable audio streams.');
}
if (typeof AudioData === 'undefined') {
  alert('Your browser does not support WebCodecs.');
}

// RNNoise inference session 
let model;
// Audio element
let audio;
// Buttons
let originalButton;
let denoiseButton;
let stopButton;
// Transformation chain elements
let processor;
let generator;
let transformer;
// Stream from getUserMedia
let stream;
// Output from the transform
let processedStream;
// An AbortController used to stop the transform.
let abortController;
// A Flag for mode.
let denoiseMode = false;

// Initialize on page load.
async function init() {
  audio = document.getElementById('audioOutput');
  originalButton = document.getElementById('originalButton');
  stopButton = document.getElementById('stopButton');
  denoiseButton = document.getElementById('denoiseButton');

  originalButton.onclick = original;
  stopButton.onclick = stop;
  denoiseButton.onclick = denoise;

  model = await rnnoise.load();
}

const constraints = window.constraints = {
  audio: true,
  video: false
};

// Returns a denosie transform function for use with TransformStream.
function denoiseFilter() {
  const frameSize = 480; // 10ms audio data (SampleRate = 48000)
  const format = 'f32-planar';
  return async (data, controller) => {
    const inputBuffer = new Float32Array(frameSize);
    data.copyTo(inputBuffer, { planeIndex: 0, format });
    let startPreProcessing = performance.now();
    const audioFeatures = audioProcesser.preProcessing(inputBuffer);
    const modelInput = new Float32Array(audioFeatures);
    let startCompute = performance.now();
    const modelOutput = await rnnoise.compute(model, modelInput);
    let startPostProcessing = performance.now();
    const audioData = audioProcesser.postProcessing(modelOutput);
    const audioBuffer = new Float32Array(audioData);
    let endProcessing = performance.now();
    controller.enqueue(new AudioData({
      format,
      sampleRate: data.sampleRate,
      numberOfFrames: data.numberOfFrames,
      numberOfChannels: data.numberOfChannels,
      timestamp: data.timestamp,
      data: audioBuffer
    }));
    const preProcessingTime = (startCompute - startPreProcessing).toFixed(2);
    const computeTime = (startPostProcessing - startCompute).toFixed(2);
    const postProcessingTime = (endProcessing - startPostProcessing).toFixed(2);
    console.log(
      `preProcessingTime time: ${preProcessingTime} ms  ` +
      `computeTime time: ${computeTime} ms  ` +
      `postProcessingTime time: ${postProcessingTime} ms`
    );
  };
}

async function getAudioTrack() {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    const errorMessage =
      'navigator.MediaDevices.getUserMedia error: ' + error.message + ' ' +
      error.name;
    console.log(errorMessage);
  }
  const audioTracks = stream.getAudioTracks();
  console.log('Using audio device: ' + audioTracks[0].label);
  stream.oninactive = () => {
    console.log('Stream ended');
  };
  return audioTracks[0];
}

async function original() {
  if (denoiseMode) { await stop() }
  originalButton.disabled = true;

  const audioTrack = await getAudioTrack();
  processedStream = new MediaStream();
  // Add original audio track to processed stream directly.
  processedStream.addTrack(audioTrack);
  audio.srcObject = processedStream;
  stopButton.disabled = false;
  denoiseButton.disabled = false;
  await audio.play();
}

async function denoise() {
  denoiseMode = true;
  denoiseButton.disabled = true;
  
  const audioTrack = await getAudioTrack();
  processor = new MediaStreamTrackProcessor(audioTrack);
  generator = new MediaStreamTrackGenerator('audio');
  const source = processor.readable;
  const sink = generator.writable;
  transformer = new TransformStream({ transform: denoiseFilter() });
  abortController = new AbortController();
  const signal = abortController.signal;
  const promise = source.pipeThrough(transformer, { signal }).pipeTo(sink);
  promise.catch((e) => {
    if (signal.aborted) {
      console.log('Shutting down streams after abort.');
    } else {
      console.error('Error from stream transform:', e);
    }
    source.cancel(e);
    sink.abort(e);
  });
  processedStream = new MediaStream();
  processedStream.addTrack(generator);
  audio.srcObject = processedStream;
  stopButton.disabled = false;
  originalButton.disabled = false;
  await audio.play();
}

async function stop() {
  stopButton.disabled = true;
  audio.pause();
  audio.srcObject = null;
  stream.getTracks().forEach(track => {
    track.stop();
  });
  if (denoiseMode) {
    abortController.abort();
    abortController = null;
    denoiseMode = false;
  }
  originalButton.disabled = false;
  denoiseButton.disabled = false;
}

window.onload = init;
