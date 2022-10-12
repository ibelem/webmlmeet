# Web-based Intelligent Collaboration

A Web-based Intelligent Collaboration (WIC) demo, which integrated emerging Web APIs including Wasm, WebGL, and up to date W3C Web Neural Network API (WebNN), running on the on-device hardware such as CPU, GPU or purpose-built AI accelerators like Intel VPU.

> [Web Neural Network (WebNN) API](https://webmachinelearning.github.io/webnn/) is a dedicated low-level API for neural network inference hardware acceleration. It is published by the [W3C Machine Learning for the Web Community Group](https://www.w3.org/community/webmachinelearning/).

## Features

### Video Conference Features

- Video and audio
- Screen sharing
- Conversation / Text message
- ...

### Web Machine Learning Features

- Background blur
- Background replacement
- Noise suppression
- More to come

#### Supported Backends
- Slowest: WebAssembly (Wasm) + SIMD
- Fastest: Web Neural Network (WebNN) API

#### Machine Learning JavaScript Frameworks Integration

- [TensorFlow Lite Web](https://github.com/tensorflow/tfjs/tree/master/tfjs-tflite) +/- [MediaPipe in JavaScript](https://google.github.io/mediapipe/getting_started/javascript)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [ONNX Runtime Web](https://github.com/microsoft/onnxruntime/tree/master/js/web#readme)

## Precondition

- The WIC demo requires WebRTC server support, you can [set up Intel Open WebRTC Toolkit (OWT) Server](doc/Server.md) on Linux host.
- The recommend way is setting the OWT server via Docker on [Linux](doc/Docker_Linux.md) or [Windows](doc/Docker_Windows.md).

## Setup

### HTTPS Configuration

Go to this project main dir, and create private and public key.

#### Recommend 

Visit https://github.com/FiloSottile/mkcert, install mkcert

```
$ mkcert -install
$ mkcert yourdomain.com xxx.xxx.xxx.xxx localhost 127.0.0.1 ::1
```
Use the .pem and key.pem files directly or generate .key and .crt files from these .pem files. Fill the certificate path in `Line 99` and `Line 100` in `meetingserver.js`

#### Alternative

```
$ openssl genrsa 2048 > wic.key
$ chmod 400 wic.key
$ openssl req -new -x509 -nodes -sha256 -days 365 -key wic.key -out wic.crt
```

### Environment Configuration

Update configurations in `config.js` under main folder, paste `sampleServiceId` and `sampleServiceKey` values from WebRTC server via Docker on [Linux](doc/Docker_Linux.md) or [Windows](doc/Docker_Windows.md), or in 'Launch the OWT Server as Single Node' section of [Open WebRTC Toolkit (OWT) Server Setup](doc/Server.md), update them as the values of `id` and `key` in [config.js](config.js) like below:


```
module.exports = {
  id: '5df9ca6f7415937c7a91d774',
  key: 'rGtTQokQM/OeG/9oDzK9TtFjd+OOeUmFN2dZl52mvaI4cSj1waduIJB8x21Wa9MaGqtZzV1KTWBvr7heBIgSjQjQyeBWI0RFzCTSyhFtd9jmZ994xE50Gkmb2zxkQYALef8oj8do3gT/cWfOfgq1zPooCkRtbMK1xm44Avduyj4=',
  url: 'https://10.239.115.53:3000/',
  httpPort: 8001,
  httpsPort: 8002,
};

```

Update `meetingserver.js`:

```
cert: fs.readFileSync('cert/wic.crt'),
key: fs.readFileSync('cert/wic.key'),
```

### Build

``` bash
$ npm install
$ node meetingserver.js 
```

If error happens related to port conflict, you could change ports in `config.js`.

### How to Run

If you are running the code locally, the browser will show "Your connection is not private" when accessing Intel OWT server and WIC demo:

- Visit https://xxx.xxx.xxx.xxx:8080/socket.io/?EIO=3&transport=polling
- Click "Advanced" button -> Click "Proceed to xxx.xxx.xxx.xxx (unsafe)"
- Visit WIC demo URL set in config.js, e.g: https://127.0.0.1:8001/
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"

> On macOS if it says "Your connection is not private", click somewhere on the page and then blindly type `thisisunsafe` which will instantly bypass the warning.
