'use strict';

/* eslint max-len: ["error", {"code": 120}] */

// DeepLab V3 MobileNet V2 model with tflite-support
class DeepLabV3MNV2TFLite {
  constructor() {
    this.inputOptions = {
        mean: [127.5, 127.5, 127.5],
        std: [127.5, 127.5, 127.5],
        scaledFlag: false,
        inputLayout: 'nhwc',
        labelUrl: '../../assets/models/deeplab/labels.txt',
        inputDimensions: [1, 321, 321, 3],
        inputResolution: [321, 321]
      };
      this.outputDimensions = [1,321, 321, 21];
  }

  async load() {
  let MODEL_PATH = '../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.tflite';
  (modelname === "dl" && mi === "3") ? MODEL_PATH = `../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.tflite` : MODEL_PATH = `../../assets/models/deeplab/deeplab_mobilenetv2_513_no_argmax.tflite`;

  if(modelname === "dl" && mi === "5") {
    this.inputOptions.inputDimensions = [1, 513, 513, 3],
    this.inputOptions.inputResolution = [513, 513]
    this.outputDimensions = [1,513, 513, 21]
  }

  const [module, modelArrayBuffer] = await Promise.all([
    tflite_model_runner_ModuleFactory(),
    (await fetch(MODEL_PATH)).arrayBuffer(),
  ]);
  const modelBytes = new Uint8Array(modelArrayBuffer);
  const offset = module._malloc(modelBytes.length);
  module.HEAPU8.set(modelBytes, offset);

  let iswebnn = false;
  if(backend === "webnn") iswebnn = true

  // Create model runner.
  const modelRunnerResult =
      module.TFLiteWebModelRunner.CreateFromBufferAndOptions(
          offset, modelBytes.length, {
            numThreads: Math.min(
                4, Math.max(1, (navigator.hardwareConcurrency || 1) / 2)),
                enableWebNNDelegate: iswebnn,
                webNNDevicePreference: ds // 0 - default, 1 - gpu, 2 - cpu
          });

  if (!modelRunnerResult.ok()) {
    throw new Error(
        'Failed to create TFLiteWebModelRunner: ' + modelRunnerResult.errorMessage());
  }
  const modelRunner = modelRunnerResult.value();
  return modelRunner;
  }

  compute(modelRunner, inputData) {
    // Get input and output info.
    const inputs = this.callAndDelete(
        modelRunner.GetInputs(), results => this.convertCppVectorToArray(results));
    const input = inputs[0];
    const outputs = this.callAndDelete(
        modelRunner.GetOutputs(), results => this.convertCppVectorToArray(results));
    const output = outputs[0];

    // Set input tensor data from the image
    const inputBuffer = input.data();
    // const inputData = new Float32Array(inputBuffer.length);
    inputBuffer.set(inputData);

    const success = modelRunner.Infer();
    if (!success) return;
    return output.data();
  }

  /**
   * Calls the given function with the given deletable argument, ensuring that
   * the argument gets deleted afterwards (even if the function throws an error).
  */
  callAndDelete(arg, func) {
    try {
      return func(arg);
    } finally {
      if (arg != null) arg.delete();
    }
  }

  /** Converts the given c++ vector to a JS array. */
  convertCppVectorToArray(vector) {
    if (vector == null) return [];
  
    const result = [];
    for (let i = 0; i < vector.size(); i++) {
      const item = vector.get(i);
      result.push(item);
    }
    return result;
  }
}
