const asyncUtils = promise => (
  promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ error, data: null }))
);

const parseSearchParams = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

const hasSearchParam = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has(key);
};

const parsePathnameModel = () => {
  let pathname = location.pathname;
  var models = ["ss", "dl"];
  for (var model of models) {
    if (pathname.toLowerCase().indexOf(model) >-1) {
      return model
    }
  }
};

const parseParamBackend = () => {
  // let pathname = location.pathname;
  // var backends = ["wasm", "webnn", "webgl", "webgpu"];
  // for (var backend of backends) {
  //   if (pathname.toLowerCase().indexOf(backend) >-1) {
  //     return backend
  //   }
  // }
  let backend = parseSearchParams("b")
  return backend.toLowerCase()
};

const parsePathFwk = () => {
  let pathname = location.pathname;
    if (pathname.toLowerCase().indexOf('ort-') >-1) {
      return 'ONNX'
    }
    if (pathname.toLowerCase().indexOf('tflite-') >-1) {
      return 'TFLite'
    }
};

const parseParamDevice = () => {
  let ds = parseSearchParams("d")
  return parseInt(ds)
};


const parseParamModelI = () => {
  let mi = parseSearchParams("i")
  return mi.toLowerCase()
};

const isElementOverflowing = (ele) => {
  return ele.offsetWidth < ele.scrollWidth;
}

const  wrapContentsInMarquee = (ele) => {
  let marquee = document.createElement('marquee'),
    contents = ele.innerText;
  marquee.setAttribute("scrollamount", 3)
  marquee.innerText = contents;
  ele.innerHTML = '';
  ele.appendChild(marquee);
}

const userMarquee = () => {
  let ele = $('.username');
  for(let i of ele) {
    if (isElementOverflowing(i)) {
      wrapContentsInMarquee(i);
    }
  }
}

const optionsLink = (username) => {
  let olink = $(".options li a")
  for(let i of olink) {
    let t = i.getAttribute('href');
    if(t.indexOf("?")>-1) {
      i.setAttribute('href', t + '&usr=' + username);
    } else {
      i.setAttribute('href', t + '?usr=' + username);
    }
  }
}