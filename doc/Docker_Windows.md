# Run OWT Server, WIC Server and WIC demo client on the same Windows device

## Install Docker Desktop on Windows

1. Install Docker Desktop on Windows
> https://docs.docker.com/desktop/install/windows-install/

2. Register an user and log in Docker Desktop
3. (Optional) Set Proxy environment when needed: click "Settings" -> "Resources" -> "Proxies" -> Set HTTP/HTTPS proxies -> "Apply & Restart"

## Intel Open WebRTC Toolkit (OWT) Server Setup in Docker

1. Run Windows Powershell as administrator

2. Download OWT images

`> docker pull openvisualcloud/xeon-ubuntu1804-service-owt`

3. Run `> docker images` to get the [Image ID]
4. Start OWT Server in Docker 
   
`> docker run -itd -p 8080:8080 -p 3000:3000 -p 3004:3004 -p 10000-11000:10000-11000 --name=owt1 [your image ID]`

5. Go to bash environment in Docker

`> docker exec -it owt1 bash`

6. Update some config files

```
$ cd owt
$ sed -i "s/localhost/127\.0\.0\.1/" */*.toml
$ apt update && apt install vim
```

`$ vim portal/portal.toml` and update `hostname` value to `127.0.0.1`

`$ vim webrtc_agent/agent.toml`, update `maxport`, `minport` to `11000` and `10000`

6. Init OWT Service 

```
$ cd ..
$ ./launch.sh
```

You will get logs like:

```
MongoDB already running
Rabbitmq-server already running
Initializing ManagementAPIServer configuration...
superServiceId: 5e8422974963a115ad48b4a5
superServiceKey: so336bcIaNj4ok+WqaiYlbpNUghN8Bf/Ch+wHIB9F28IaT/zP97676LjChERzOE15qYOfrICVkffVDRbE/XqIYfdMTJKZOPuy5dWlHeIG3wGefbWoFntMecd8XrFSU9rZWUb/x6g+lnlctfYKgOK8V1QKuPS1Uk/6mzmkGwAet8=
sampleServiceId: 5df9ca6f7415937c7a91d774
sampleServiceKey: rGtTQokQM/OeG/9oDzK9TtFjd+OOeUmFN2dZl52mvaI4cSj1waduIJB8x21Wa9MaGqtZzV1KTWBvr7heBIgSjQjQyeBWI0RFzCTSyhFtd9jmZ994xE50Gkmb2zxkQYALef8oj8do3gT/cWfOfgq1zPooCkRtbMK1xm44Avduyj4=
ubuntu 18.04.4 lts
```
Please copy and paste `sampleServiceId` and `sampleServiceKey` values, which will be used in [config.js](../config.js).

Check if the server running well by accessing `https://127.0.0.1:3004` in web browser.


### Stop or Restart the OWT Service
   
```
$ ./bin/start-all.sh
$ ./bin/stop-all.sh
```

## Start the Web-based Intelligent Collaboration Server

Download and upzip https://github.com/ibelem/webmlmeet/archive/refs/heads/main.zip

### Node.js

Install `Node.js v14.18.2` on Windows

#### config.js

Please update configurations in `config.js` under main folder.

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

Go to project main dir like `D:\projects\webmlmeet` and create private and public key, the certificate path need to be filled in `Line 99` and `Line 100` in `meetingserver.js`.

We may need to install OpenSSL on Windows to generate the certificate files, to save your efforts, please just get the .crt and .key files in http://<INTRANET>/project/webnn/demo/demoday2022/Web-based%20Intelligent%20Collaboration/Windows/cert directly.


```
cert: fs.readFileSync('cert/webmlmeet.crt'),
key: fs.readFileSync('cert/webmlmeet.key'),
```

### Build

```
> npm install
> node meetingserver.js 
```

If error happens related to port conflict, you could change ports in `config.js`.


### Test the Server in Browser

If you are running the code locally, the browser will show "Your connection is not private" when accessing Intel OWT server and WIC web pages.

- Visit https://127.0.0.1:8002/socket.io/?EIO=3&transport=polling
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"
- Visit WIC URL set in config.js, e.g: https://127.0.0.1:8002/
- Click "Advanced" button -> Click "Proceed to 127.0.0.1 (unsafe)"

## Run Wasm and WebNN in Web-based Intelligent Collaboration Electron.js App - Windows

## Prerequisites Steps

1. Download OpenVINO toolkit (w_openvino_toolkit_p_2021.4.582.exe) from http://<INTRANET>/project/webnn/demo/demoday2022/w_openvino_toolkit_p_2021.4.582.exe
2. Install and configure OpenVINO toolkit (You could refer to https://docs.openvino.ai/latest/openvino_docs_install_guides_installing_openvino_windows.html for more details)
3. Download Web-based Intelligent Collaboration app from http://<INTRANET>/project/webnn/demo/demoday2022/Web-based%20Intelligent%20Collaboration/web_ic_demo-win32-x64-0.0.1.zip
3. Extract Demo zip file to folder "web_ic_demo-win32-x64-0.0.1"

### Launch Web-based Intelligent Collaboration App

Launch Powershell or Windows Command Prompt (Terminal)

```
> "C:\Program Files (x86)\Intel\openvino_2021\bin\setupvars.bat"
> cd D:\projects\web_ic_demo-win32-x64-0.0.1 
> web_ic_demo.exe url=https://127.0.0.1:8002/ (The port number was updated by you in config.js)
```

You will see:

> A standalone web_ic_demo launched

### Web-based Intelligent Collaboration

- Select TensorFlowLite + DL321 + Wasm + MediaPipe (No), type any name and Join the meeting, click the Background Blur button, the Wasm performance is about 2-3 FPS
- Exit the demo, re-launch `>web_ic_demo.exe url=https://127.0.0.1:8002/`
- Select TensorFlowLite + DL321 + WebNN CPU + MediaPipe (No), type any name and Join the meeting, click the Background Blur button, the FPS of WebNN performance should be much faster

If you exited the terminal, please make sure to set `> "C:\Program Files (x86)\Intel\openvino_2021\bin\setupvars.bat"` to initialize the OpenVINO environment beforing using WebNN OpenVINO backend.