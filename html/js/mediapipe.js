
const mpfeatures = async () => {
    await selfieSegmentation.send({ image: inputvideo_mp });
  };
  
  const initStream = () => {
    camera = new Camera(inputvideo_mp, {
      onFrame: async () => {
        await mpfeatures();
      },
      onSourceChanged: () => {
        selfieSegmentation.reset();
      },
      width: resolution.width,
      height: resolution.height,
    });
  };

const onBRResults = (results) => {
    if(isPauseVideo) {
      ctx.drawImage(bgpause, 0, 0, cW, cH);
    } else {
  
      if(!isbb && !isbr) {
  
        ctx.drawImage(results.image, 0, 0, cW, cH);
        if(isbeauty) {
          ctx.filter = "saturate(105%) brightness(120%) contrast(110%) blur(1px)"
        } else {
          ctx.filter = "saturate(100%) brightness(100%) contrast(100%) blur(0px)"
        }
      } else {
  
        end = performance.now()
        if(start) {
          delta = end - start
          spaninference.html(delta.toFixed(1))
        }
  
        fpsControl.tick();
  
        ctx.save();
        ctx.clearRect(0, 0, cW, cH);
        ctx.drawImage(results.segmentationMask, 0, 0, cW, cH);
  
        // Only overwrite existing pixels.
        ctx.globalCompositeOperation = "source-in";
  
        if(isbeauty) {
          ctx.filter = "saturate(110%) brightness(150%) contrast(110%) blur(1px)"
        }
        
        ctx.drawImage(results.image, 0, 0, cW, cH);
        ctx.globalCompositeOperation = "destination-atop";
  
        if(isbb && isbr) {
          ctx.filter = "blur(10px)"
          ctx.drawImage(bg, 0, 0, cW, cH);
        } else if (isbb) {
          ctx.filter = "blur(10px)"
          ctx.drawImage(results.image, 0, 0, cW, cH);
        } else if (isbr) {
          ctx.drawImage(bg, 0, 0, cW, cH);
        }
  
        ctx.restore();
        start = performance.now()
      }
    }
  }
  
  const selfieSegmentation = new SelfieSegmentation({
    locateFile: (file) => {
      return `./js/mediapipe/model/selfie_segmentation/${file}`;
    },
  });
  
  selfieSegmentation.onResults(onBRResults);
  
  const controls = window;
  const fpsControl = new controls.FPS();
  const controlsElement = document.querySelector("#control-panel");
  
  new controls.ControlPanel(controlsElement).add([fpsControl]);
  
  const onewebMeetMediaPipe = async () => {
    // await createOWTStream()
    initStream();
    await camera.start();
    getProcessedStream();
    initConference();
  };
  