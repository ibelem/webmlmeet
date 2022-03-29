'use strict';

/* eslint max-len: ["error", {"code": 120}] */

// DeepLab V3 MobileNet V2 model with onnxruntime web
class DeepLabV3MNV2ONNX {
  constructor() {
    this.inputOptions = {
        mean: [127.5, 127.5, 127.5],
        std: [127.5, 127.5, 127.5],
        scaledFlag: false,
        inputLayout: 'nhwc',
        labelUrl: '../../assets/models/deeplab/labels.txt',
        inputDimensions: [1, 321, 321, 3], // deeplab
        inputResolution: [321, 321]
      };
      this.outputDimensions = [1,321,321,21];
  }

  async load() {

    // override path of wasm files - for each file
    ort.env.wasm.wasmPaths = {
      'ort-wasm.wasm': '../../assets/js/onnx/ort-wasm.wasm',
      'ort-wasm-simd.wasm': '../../assets/js/onnx/ort-wasm-simd.wasm',
      'ort-wasm-threaded.wasm': '../../assets/js/onnx/ort-wasm-threaded.wasm',
      'ort-wasm-simd-threaded.wasm': '../../assets/js/onnx/ort-wasm-simd-threaded.wasm'
    };

    if(backend === "webnn") {
      ort.env.wasm.numThreads = 1;
    }

    // Create the model runner with the model.
    let model = '../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.onnx';
    (modelname === "dl" && mi === "3") ? model = `../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.onnx` : model = `../../assets/models/deeplab/deeplab_mobilenetv2_513_no_argmax.onnx`;

    if(modelname === "dl" && mi === "5") {
      this.inputOptions.inputDimensions = [1, 513, 513, 3],
      this.inputOptions.inputResolution = [513, 513]
      this.outputDimensions = [1,513, 513, 21]
    }
  
    const session = await ort.InferenceSession.create(model,  {
      executionProviders: ['wasm', {name: backend, devicePreference: ds}], 
      logSeverityLevel: 0 
    });
    return session;
  }

  async compute(session, inputData) {
    const inputTensor = new ort.Tensor('float32', inputData, this.inputOptions.inputDimensions);
    // prepare feeds. use model input names as keys.
    let feeds;
    
    if(modelname === "dl" && mi === "3") {
      feeds = {'sub_2': inputTensor};
    }

    if(modelname === "dl" && mi === "5") {
      feeds = {'sub_7': inputTensor};
    }
    // feed inputs and run
    const results = await session.run(feeds);

    // read from results
    let outputBuffer; 
    
    if(modelname === "dl" && mi === "3") {
      outputBuffer =results.ResizeBilinear_2.data;
    } 

    if(modelname === "dl" && mi === "5") {
      outputBuffer = results.ResizeBilinear_3.data;
    }

    return outputBuffer;
  }
}
