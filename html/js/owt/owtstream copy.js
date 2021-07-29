const createOWTStream = async () => {
  stream = await Owt.Base.MediaStreamFactory.createMediaStream(
    avTrackConstraint
  )
  console.log(inputvideo)
  if ("srcObject" in inputvideo) {
    inputvideo.srcObject = stream
  } else {
    inputvideo.src = URL.createObjectURL(stream)
  }

  inputvideo.autoplay = true
  console.log(inputvideo.srcObject)
}

let continueinputvideo = true

const videoCanvasOnFrame = () => {
  if(continueinputvideo)
  {
    window.requestAnimationFrame(videoCanvasOnFrame);
    ctx2.drawImage(inputvideo, 0, 0, cW, cH);
  }
}

const initRenderer = (effect) => {
  renderer = new Renderer(outputcanvas);

  if(effect === "blur") {
    renderer.blurRadius = 5
  }
  // renderer.refineEdgeRadius = 10
  renderer.effect = effect
  renderer.setup();
}

const oneWebMeetOWT = async () => {
  isOWT = true
  await createOWTStream()
  if(isOWT && isSS) {
    ctx2 = $("#outputcanvas")[0].getContext("webgl2");
  }

  if(isOWT && !isSS) {
    ctx2 = $("#outputcanvas")[0].getContext("2d");
  }

  continueinputvideo = true
  videoCanvasOnFrame();
  getProcessedStream();
  console.log("^^^^^^^^^^^^^^^^^^^")
  console.log(stream)
  initConference();
};


const ssConfig = (isSS, effect) => {
  if(isOWT) {
    if(isSS) {
      ctx2 = $("#outputcanvas")[0].getContext("webgl2");

      loadScriptsInOrder([
        '../js/tflite/lib/webgl_utils.js',
        '../js/tflite/lib/shader.js',
        '../js/tflite/lib/guided_filter.js',
        '../js/tflite/lib/renderer.js'
      ]).then(function() {
          if(effect) {
            initRenderer(effect)
            console.log(isSS + ' ' + effect)
            if(effect === "blur") {
              renderer.blurRadius = 5
            }
            // renderer.refineEdgeRadius = 10
            renderer.effect = effect
            continueAnimating = true
            continueinputvideo = false
            ss()
          }  
      })

    } else {
      ctx2 = $("#outputcanvas")[0].getContext("2d");
      continueAnimating = false;
      continueinputvideo = true
      // videoCanvasOnFrame()
    }
  }
}

// Load a script from given `url`
const loadScript = function(url) {
  return new Promise(function(resolve, reject) {
      const script = document.createElement('script');
      script.src = url;

      script.addEventListener('load', function() {
          // The script is loaded completely
          resolve(true);
      });

      document.head.appendChild(script);
  });
};

// Perform all promises in the order
const waterfall = function(promises) {
  return promises.reduce(
      function(p, c) {
          // Waiting for `p` completed
          return p.then(function() {
              // and then `c`
              return c().then(function(result) {
                  return true;
              });
          });
      },
      // The initial value passed to the reduce method
      Promise.resolve([])
  );
};

// Load an array of scripts in order
const loadScriptsInOrder = function(arrayOfJs) {
  const promises = arrayOfJs.map(function(url) {
      return loadScript(url);
  });
  return waterfall(promises);
};