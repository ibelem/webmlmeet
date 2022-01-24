There are some code hacks for running the app better.

## Intel Open WebRTC Toolkit (OWT)

### Update `js/owt/conference/channel.js` code

```
  if (options.audio === undefined) {
    options.audio = !!stream.settings.audio;
  }
```
to following for fixing a screen sharing mode issue caused by audio option:

```
  if (options.audio === undefined) {
    if (stream.settings.audio.length === 0) {
      options.audio = false;
    } else {
      options.audio = !!stream.settings.audio;
    }
  }
```

```
  const publicationId =
    await this._signaling.sendSignalingMessage('publish', {
      media: {tracks: trackOptions},
      attributes: stream.attributes,
      transport: {id: this._id, type: 'webrtc'},
    }).id;
```
to
```
  const publishResp =
    await this._signaling.sendSignalingMessage('publish', {
      media: {tracks: trackOptions},
      attributes: stream.attributes,
      transport: {id: this._id, type: 'webrtc'},
    });
  const publicationId = publishResp.id;

  const messageEvent = new MessageEvent('id', {
    message: publicationId,
    origin: this._remoteId,
  });
  this.dispatchEvent(messageEvent);

  this._id = publishResp.transportId;
```

### Update `js/owt/conference/client.js` code

```
  function sendSignalingMessage(type, message) {
    return signaling.send(type, message);
  }
```
to
```
  async function sendSignalingMessage(type, message) {
    return signaling.send(type, message);
  }
```


## Can I Use

This project is using several latest W3C Web APIs implemented in morden browsers.

[Open WebRTC Toolkit JavaScript SDK 5.1+](https://github.com/open-webrtc-toolkit/owt-client-javascript)

[W3C WebRTC 1.0: Real-Time Communication Between Browsers](https://w3c.github.io/webrtc-pc/)

| API  | Chrome |
| ------------- | ------------- |
| `RTCPeerConnection`  | 97  |
| `RTCRtpTransceiver` | 97 |

[W3C MediaStreamTrack Insertable Media Processing using Streams](https://w3c.github.io/mediacapture-transform/)

| API  | Chrome |
| ------------- | ------------- |
| `MediaStreamTrackProcessor`  | 97 |
| `MediaStreamTrackGenerator`  | The version that the WebRTC WG is [currently iterating](https://github.com/webmachinelearning/webnn/issues/226) on for MediaStreamTrackGenerator is slightly different from what Chrome 87 implements |

[W3C Web Neural Network API](https://webmachinelearning.github.io/webnn/)

| API  | Chrome |
| ------------- | ------------- |
| `navigator.ml`  | Not supported in 2022 |
| `MLGraphBuilder`  | Not supported in 2022 |

