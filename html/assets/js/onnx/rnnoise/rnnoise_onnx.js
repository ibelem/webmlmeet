'use strict';

class RNNoiseONNX {
  constructor() {
    this.steps = 1;
    this.batchSize = 1;
    this.featureSize = 42;
    this.gruNumDirections = 1;
    this.vadGruHiddenSize = 24;
    this.noiseGruHiddenSize = 48;
    this.denoiseGruHiddenSize = 96;
    this.vadGruInitialH = new ort.Tensor(
      'float32',
      new Float32Array(this.gruNumDirections * this.batchSize * this.vadGruHiddenSize).fill(0),
      [this.gruNumDirections, this.batchSize, this.vadGruHiddenSize]
    );
    this.noiseGruInitialH = new ort.Tensor(
      'float32',
      new Float32Array(this.gruNumDirections * this.batchSize * this.noiseGruHiddenSize).fill(0),
      [this.gruNumDirections, this.batchSize, this.noiseGruHiddenSize]
    );
    this.denoiseGruInitialH = new ort.Tensor(
      'float32',
      new Float32Array(this.gruNumDirections * this.batchSize * this.denoiseGruHiddenSize).fill(0),
      [this.gruNumDirections, this.batchSize, this.denoiseGruHiddenSize]
    );
  }

  async load() {
    // Override path of wasm files - for each file
    
    ort.env.wasm.wasmPaths = {
      'ort-wasm.wasm': '../../../js/onnx/ort-wasm.wasm',
      'ort-wasm-simd.wasm': '../../../js/onnx/ort-wasm-simd.wasm',
      'ort-wasm-threaded.wasm': '../../../js/onnx/ort-wasm-threaded.wasm',
      'ort-wasm-simd-threaded.wasm': '../../../js/onnx/ort-wasm-simd-threaded.wasm'
    };
    ort.env.wasm.numThreads = 0; // Number of thread(s) will be determined by system.
    ort.env.wasm.simd = true; // Enable SIMD.

    if(backend === "webnn") {
      ort.env.wasm.numThreads = 1;
    }

    // Create the model runner with the model.
    const model = '../../../../assets/models/rnnoise/rnnoise_proto.onnx';
    const session = ort.InferenceSession.create(model, {
      executionProviders: ['wasm', {name: backend, devicePreference: ds}], 
      logSeverityLevel: 0 
    });
    return session;
  }

  async compute(session, inputData) {
    const inputTensor = new ort.Tensor('float32', inputData, [this.steps, this.batchSize, this.featureSize]);
    // Prepare feeds. use model input names as keys.
    const feeds = {
      'main_input': inputTensor,
      'vad_initial_h': this.vadGruInitialH,
      'noise_initial_h': this.noiseGruInitialH,
      'denoise_initial_h': this.denoiseGruInitialH
    };
    // Feed inputs and run

    const results = await session.run(feeds);

    // Read from results
    this.vadGruInitialH = results.vad_gru_Y_h;
    this.noiseGruInitialH = results.noise_gru_Y_h;
    this.denoiseGruInitialH = results.denoise_gru_Y_h;

    return results.denoise_output.data;
  }
}
