# Run OWT Server, WIC Server and WIC demo on the same Linux device

## Docker Installation

Please follow the [instructions to install Docker Desktop](https://docs.docker.com/desktop/install/linux-install/).

- [Install Docker Desktop on Fedora](https://docs.docker.com/desktop/install/fedora/)
- [Install Docker Desktop on Ubuntu](https://docs.docker.com/desktop/install/ubuntu/)

If you are undering the proxy environment, please [Configure Docker to use a proxy server](https://docs.docker.com/network/proxy/)

## Intel Open WebRTC Toolkit (OWT) Server Setup in Docker

1. Download OWT images

`$ docker pull openvisualcloud/xeon-ubuntu1804-service-owt`

2. Run `$ docker images` to get the [Image ID]
3. Start OWT Server in Docker 
   
`$ docker run -itd -p 8080:8080 -p 3000:3000 -p 3004:3004 -p 10000-11000:10000-11000 --name=owt1 [your image ID]`

4. Go to bash environment in Docker

`$ docker exec -it owt1 bash`

5. Update some config files

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

Go back to [README.md](../README.md)