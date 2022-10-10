# Intel Open WebRTC Toolkit (OWT) Server Setup

## Server Requirements

- CentOS 7.6
- Ubuntu 18.04 LTS

## Download and Install Open WebRTC Toolkit (OWT) Server

1. Build the OWT release package from https://github.com/open-webrtc-toolkit/owt-server
2. `$ tar zxvf CS_WebRTC_Conference_Server_MCU.v<Version>.Ubuntu.tgz && cd Release-v<Version>`


## Launch the OWT Server as Single Node

When install OWT server for some configurations, please just press "Enter" key to next steps in test environment. For example, just press "Enter" key for MongoDB settings. For general OWT Server installation, use following command:

`$ bin/init-all.sh --deps`

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
...
```

Please copy and paste `sampleServiceId` and `sampleServiceKey` values, which will be used in `webrtcserver.id` and `webrtcserver.key` of `config.js` in main folder. Please run `ifconfig` on WebRTC server to get IP `xxx.xxx.xxx.xxx` like `10.239.47.52` or provide webrtc server domain for `webrtcserver`.`url` of `config.js` in main folder.

If you want to enable GPU-acceleration through Intel Media Server Studio, use following command:

`$ bin/init-all.sh --deps --hardware`

Run the following commands to start the OWT server:

```
$ cd Release-<Version>/
$ bin/start-all.sh
```

## Server Status

To verify whether the server has started successfully, launch your browser and connect to the OWT server at https://XXXXX:3004. Replace XXXXX with the IP address or machine name of your OWT server.

## Stop the OWT Server

```
$ cd Release-<Version>/
$ bin/stop-all.sh
```