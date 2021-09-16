let netInstance;
let inputOptions;
let modelRunner;
let inputBuffer;
let outputBuffer;

let loadtask = async () => {
    importScripts("../../utils.js");
    importScripts("./deeplabv3_mnv2_tflite.js");
    netInstance = new DeepLabV3MNV2TFLite();
    inputOptions = netInstance.inputOptions;
    self.postMessage({msg: "loading model"});
    modelRunner = await netInstance.load();
    self.postMessage({msg: "model loaded"});
}

let computetask = async () => {
    inputBuffer = getInputTensor(null, inputOptions);
    outputBuffer = netInstance.compute(modelRunner, inputBuffer);
    self.postMessage({msg: "prediction completed"});
}

loadtask();
computetask();


 