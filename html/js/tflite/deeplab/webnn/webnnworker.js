let netInstance;
let inputOptions;
let modelRunner;
let inputBuffer;
let outputBuffer;

let loadtask = async () => {
    importScripts("../../utils.js");
    importScripts("../../deeplab/tflite_model_runner_cc_simd.js");
    importScripts("../../deeplab/tflite_model_runner_cc_threaded_simd.worker.js");
    importScripts("./deeplabv3_mnv2_tflite.js");
    netInstance = new DeepLabV3MNV2TFLite();
    inputOptions = netInstance.inputOptions;
    self.postMessage({msg: "loading model"});
    modelRunner = await netInstance.load();
    self.postMessage({msg: "model loaded"});
}

let computetask = async () => {
    inputBuffer = new Float32Array([1, 321, 321, 3], 0);
    outputBuffer = netInstance.compute(modelRunner, inputBuffer);
    self.postMessage({msg: "prediction completed"});
}

addEventListener('message', (e) => {
    const [loadt, computet] = e.data;
    if(loadt === "loadtask") {
        loadtask();
    }
    if(computet === "computetask") {
        computetask();
    }
});

// loadtask();
// computetask();


 