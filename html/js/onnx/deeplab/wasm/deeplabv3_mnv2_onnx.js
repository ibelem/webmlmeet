'use strict';

/* eslint max-len: ["error", {"code": 120}] */

// DeepLab V3 MobileNet V2 model with onnxruntime web
class DeepLabV3MNV2ONNX {
  constructor() {
    this.inputOptions = {
        mean: [127.5, 127.5, 127.5],
        std: [127.5, 127.5, 127.5],
        scaledFlag: true,
        inputLayout: 'nhwc',
        labelUrl: '../../assets/models/deeplab/labels.txt',
        inputDimensions: [1, 321, 321, 3], // deeplab
      };
      this.outputDimensions = [1,321,321,21];
  }

  async load() {
  // Create the model runner with the model.
  const session = await ort.InferenceSession.create('../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.onnx');
  return session;
  }

  async compute(session, inputData) {
    const inputTensor = new ort.Tensor('float32', inputData, this.inputOptions.inputDimensions);
    // prepare feeds. use model input names as keys.
    const feeds = {'sub_2': inputTensor};
    // feed inputs and run
    const results = await session.run(feeds);

    // read from results
    const outputBuffer = results.ResizeBilinear_2.data;
    return outputBuffer;
  }
}
