# oneWebmeet (Intelligent Collaboration)
A Web-based Intelligent Collaboration (Video Conference) demo with AI features based on up to date W3C Web Neural Network API and powered by Intel Open WebRTC Toolkit (OWT).

> [Web Neural Network (WebNN) API](https://webmachinelearning.github.io/webnn/) is a dedicated low-level API for neural network inference hardware acceleration. It is published by the [W3C Machine Learning for the Web Community Group](https://www.w3.org/community/webmachinelearning/).

## Features 

### Web Machine Learning Features

- Background blur
- Background replacement
- Noise suppression
- More to come

### Normal Video Conference Features

- Video and audio
- Screen sharing
- Conversation / Text message
- ...

### Screenshot

<img src="doc/screenshot1.png" alt="WebNN Meeting" width="60%">
<img src="doc/screenshot2.png" alt="WebNN Meeting" width="60%">

### Supported Backends for Web Machine Learning Features

- Slowest: WebAssembly (Wasm) + SIMD
- Fastest: Web Neural Network (WebNN) API

Mordern browsers including Google Chrome doesn't support WebNN API now, you can try Wasm backend automatically with your browser. 

### Web Machine Learning JavaScript Frameworks

- [TensorFlow Lite Web](https://github.com/tensorflow/tfjs/tree/master/tfjs-tflite) +/- [MediaPipe in JavaScript](https://google.github.io/mediapipe/getting_started/javascript)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [ONNX Runtime Web](https://github.com/microsoft/onnxruntime/tree/master/js/web#readme)

## Precondition and Setup

### Intel Open WebRTC Toolkit (OWT) Server Setup

The WebNN Meeting requires WebRTC server support, please read [Server Setup](doc/Server.md) for setting up Intel Open WebRTC Toolkit (OWT) Server on CentOS* 7.6 or Ubuntu 18.04 LTS.

### HTTPS Configuration

Go to project main dir like `/home/belem/github/webnnmeeting` and create private and public key, the certificate path need to be filled in `certificate`.`key` and `certificate`.`cert` of `config.js`.

#### Recommend 

Visit https://github.com/FiloSottile/mkcert, install mkcert

```
$ mkcert -install
$ mkcert yourdomain.com xxx.xxx.xxx.xxx localhost 127.0.0.1 ::1
```
Use the .pem and key.pem files directly or generate .key and .crt files from these .pem files.

#### Alternative

```
$ openssl genrsa 2048 > webnnmeeting.key
$ chmod 400 webnnmeeting.key
$ openssl req -new -x509 -nodes -sha256 -days 365 -key webnnmeeting.key -out webnnmeeting.crt
```

### Environment Configuration

Please update configurations in `config.js` under main folder.

In 'Launch the OWT Server as Single Node' section of [Open WebRTC Toolkit (OWT) Server Setup](doc/Server.md), you could get values of `webrtcserver`.`id`, `webrtcserver`.`key` and `webrtcserver`.`url` like `xxx.xxx.xxx.xxx` or `https://<webrtcserver.com>`.

you could get the sampleRoom id like `5df9d3661b3282c0ef1a5ee3` in command line log for `restapiserver`.`sampleroomparticipantspath`.

Update `config.js` with correct info:


```
module.exports = {
  id: '5df9ca6f7415937c7a91d774',
  key: 'rGtTQokQM/OeG/9oDzK9TtFjd+OOeUmFN2dZl52mvaI4cSj1waduIJB8x21Wa9MaGqtZzV1KTWBvr7heBIgSjQjQyeBWI0RFzCTSyhFtd9jmZ994xE50Gkmb2zxkQYALef8oj8do3gT/cWfOfgq1zPooCkRtbMK1xm44Avduyj4=',
  url: 'https://xxx.xxx.xxx.xxx:3000/',
  httpPort: 8008,
  httpsPort: 8080,
};

```

Update `meetingserver.js`:

```
cert: fs.readFileSync('cert/webmlmeet.crt'),
key: fs.readFileSync('cert/webmlmeet.key'),
```

### Build

``` bash
$ npm install
$ node meetingserver.js 
```

If error happens related to port conflict, you could change ports in `config.js`.

### How to Run

If you are running the code locally, the browser will show "Your connection is not private" when accessing Intel OWT server and WebNN Meeting web pages.

- Visit https://xxx.xxx.xxx.xxx:8080/socket.io/?EIO=3&transport=polling
- Click "Advanced" button -> Click "Proceed to xxx.xxx.xxx.xxx (unsafe)"
- Visit WebNN Meeting URL set in config.js, e.g: https://127.0.0.1:8888/
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"

### macOS

Once you are using macOS and it says "Your connection is not private", click somewhere on the page and then blindly type `thisisunsafe` which will instantly bypass the warning.

## License

The License of oneWebMeet is Apache 2.0.

## Code and Errors

### Code Hacks

There are some code hacks in Intel Open WebRTC Toolkit (OWT), please refer to [code hacks](doc/CodeHacks.md).

### Error Handling

If you encounter the error `ENOSPC: System limit for number of file watchers reached, watch`  when build the project on Ubuntu, please try: 

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```