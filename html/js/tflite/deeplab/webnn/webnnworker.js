 
importScripts('../tflite_model_runner_cc_simd.js');
importScripts('../../../webnn-polyfill.js');

let modelRunner;

function sizeOfShape(shape) {
    return shape.reduce((a, b) => {
        return a * b;
    });
}

let warmup = async () => {
    const inputDimensions = [1, 321, 321, 3];
    const inputBuffer = new Float32Array(sizeOfShape(inputDimensions));
    modelRunner = await load();
    compute(modelRunner, inputBuffer);
}

let nncompute = (inputBuffer) => {
    let outputBuffer = compute(modelRunner, inputBuffer);
    outputBuffer = new Float32Array(outputBuffer);
    postMessage(outputBuffer, [outputBuffer.buffer]);
}

addEventListener('message', async (e) => {
    const task = e.data.task;
    const value = e.data.value;
    if(task === "nnwarmup") {
       await warmup();
       postMessage({msg: "modelloaded"});
    }
    if(task === "nncompute") {
       nncompute(value);
    }
});

async function load() {
    // Create the model runner with the model.

    const MODEL_PATH = '../../../../assets/models/deeplab/deeplab_mobilenetv2_321_no_argmax.tflite';

    // Load WASM module and model.
    const [module, modelArrayBuffer] = await Promise.all([
        tflite_model_runner_ModuleFactory(),
        (await fetch(MODEL_PATH)).arrayBuffer(),
    ]);
    const modelBytes = new Uint8Array(modelArrayBuffer);
    const offset = module._malloc(modelBytes.length);
    module.HEAPU8.set(modelBytes, offset);
    // Create model runner.
    const modelRunnerResult =
        module.TFLiteWebModelRunner.CreateFromBufferAndOptions(
            offset, modelBytes.length, {
            numThreads: Math.min(
                4, Math.max(1, (navigator.hardwareConcurrency || 1) / 2)),
            enableWebNNDelegate: true,
            webNNDevicePreference: 1 // 0 - default, 1 - gpu, 2 - cpu
        });
    if (!modelRunnerResult.ok()) {
        throw new Error(
            'Failed to create TFLiteWebModelRunner: ' + modelRunnerResult.errorMessage());
    }
    const modelRunner = modelRunnerResult.value();
    return modelRunner;
}

function compute(modelRunner, inputData) {
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
function callAndDelete(arg, func) {
    try {
        return func(arg);
    } finally {
        if (arg != null) arg.delete();
    }
}

/** Converts the given c++ vector to a JS array. */
function convertCppVectorToArray(vector) {
    if (vector == null) return [];

    const result = [];
    for (let i = 0; i < vector.size(); i++) {
        const item = vector.get(i);
        result.push(item);
    }
    return result;
}

 