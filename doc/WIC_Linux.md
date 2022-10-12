


## Start the Web-based Intelligent Collaboration Server

Clone this repo.

### Environment Configuration

### Node.js

Install `Node.js v16`

#### config.js

Please open new terminal and update configurations in `config.js` under main folder via `vim config.js`

Paste `sampleServiceId` and `sampleServiceKey` values in step 6 of "Intel Open WebRTC Toolkit (OWT) Server Setup in Docker", update them as the values of `id` and `key` in [config.js](../config.js) like below:

```
module.exports = {
  id: '5df9ca6f7415937c7a91d774',
  key: 'rGtTQokQM/OeG/9oDzK9TtFjd+OOeUmFN2dZl52mvaI4cSj1waduIJB8x21Wa9MaGqtZzV1KTWBvr7heBIgSjQjQyeBWI0RFzCTSyhFtd9jmZ994xE50Gkmb2zxkQYALef8oj8do3gT/cWfOfgq1zPooCkRtbMK1xm44Avduyj4=',
  url: 'https://127.0.0.1:3000/',
  httpPort: 8001,
  httpsPort: 8002,
};
```

### meetingserver.js

Go to project main dir like `/home/belem/github/wic` and create private and public key, the certificate path need to be filled in `Line 99` and `Line 100` in `meetingserver.js`.

```
$ openssl genrsa 2048 > wic.key
$ chmod 400 wic.key
$ openssl req -new -x509 -nodes -sha256 -days 365 -key wic.key -out wic.crt
```

Update `meetingserver.js`:

```
cert: fs.readFileSync('cert/wic.crt'),
key: fs.readFileSync('cert/wic.key'),
```

### Build

```
$ npm install
$ node meetingserver.js 
```

If error happens related to port conflict, you could change ports in `config.js`.


### Test the Server in Browser

If you are running the code locally, the browser will show "Your connection is not private" when accessing Intel OWT server and WIC web pages.

- Visit https://127.0.0.1:8002/socket.io/?EIO=3&transport=polling
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"
- Visit WIC URL set in config.js, e.g: https://127.0.0.1:8002/
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"

## Run Wasm and WebNN in Web-based Intelligent Collaboration Electron.js App - Linux

### Prerequisites of OpenVINO on Linux

Please open new terminal.

1. Download OpenVINO toolkit from https://registrationcenter-download.intel.com/akdlm/irc_nas/18319/l_openvino_toolkit_p_2021.4.752.tgz
2. Install and configure OpenVINO toolkit (Please refer to https://docs.openvino.ai/2021.4/openvino_docs_install_guides_installing_openvino_linux.html for more details)
3. Set OpenVINO environment `$ source /opt/intel/openvino_2021/bin/setupvars.sh`

### Launch Web-based Intelligent Collaboration App

Download web_ic_demo-linux-x64-0.0.1.zip

```
$ unzip web_ic_demo-linux-x64-0.0.1.zip
$ cd web_ic_demo-linux-x64-0.0.1
$ ./web_ic_demo url=https://127.0.0.1:8002/ (The port number was updated in config.js)
```

You will see:

> A standalone web_ic_demo launched

### Web-based Intelligent Collaboration

- Select TensorFlowLite + DL321 + Wasm + MediaPipe (No), type any name and Join the meeting, click the Background Blur button, the Wasm performance is about 2-3 FPS
- Exit the demo, re-launch `$ ./web_ic_demo url=https://127.0.0.1:8002/`
- Select TensorFlowLite + DL321 + WebNN CPU + MediaPipe (No), type any name and Join the meeting, click the Background Blur button, the FPS of WebNN performance should be much faster

If you exited the terminal, please make sure to set `$ source /opt/intel/openvino_2021/bin/setupvars.sh` to Initialize the OpenVINO environment beforing using WebNN OpenVINO backend.
