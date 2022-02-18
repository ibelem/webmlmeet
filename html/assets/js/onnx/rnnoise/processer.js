'use strict';

class Processer {
  constructor(frames) {
    this.frames = frames;
    this.framesize = 480;
    this.featureSize = 42;
    this.gainsSize = 22;
  }

  preProcessing(pcm) {
    const pcmLength = this.framesize * this.frames;
    const featuresLength = this.featureSize * this.frames;
    const pcmPtr = Module._malloc(4 * pcmLength);
    for (let i = 0; i < pcmLength; i++) {
      Module.HEAPF32[pcmPtr / 4 + i] = pcm[i];
    }
    const getFeatures = Module.cwrap(
        'pre_processing', 'number', ['number', 'number'],
    );
    const featuresPtr = getFeatures(pcmPtr, this.frames);
    const features = [];

    for (let i = 0; i < featuresLength; i++) {
      features[i] = Module.HEAPF32[(featuresPtr >> 2) + i];
    }
    Module._free(pcmPtr, featuresPtr);

    return features;
  }

  postProcessing(gains) {
    const audioLength = this.framesize * this.frames;
    const gainsLength = this.gainsSize * this.frames;
    const gainsPtr = Module._malloc(4 * gainsLength);
    for (let i = 0; i < gainsLength; i++) {
      Module.HEAPF32[gainsPtr / 4 + i] = gains[i];
    }
    const getAudio = Module.cwrap(
        'post_processing', 'number', ['number', 'number'],
    );
    const audioPtr = getAudio(gainsPtr, this.frames);
    const audio = [];

    for (let i = 0; i < audioLength; i++) {
      audio[i] = Module.HEAPF32[(audioPtr >> 2) + i];
    }
    Module._free(gainsPtr, audioPtr);
    
    return audio;
  }
}
