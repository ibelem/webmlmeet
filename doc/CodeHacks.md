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