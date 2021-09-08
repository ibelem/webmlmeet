const parseSearchParams = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

const hasSearchParam = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has(key);
};

const parsePathnameBackend = () => {
  let pathname = location.pathname;
  var backends = ["wasm", "webnn", "webgl", "webgpu"];
  for (var backend of backends) {
    if (pathname.toLowerCase().indexOf(backend) >-1) {
      return backend
    }
  }
};

const parsePathnameModel = () => {
  let pathname = location.pathname;
  var models = ["selfiesegmentationlandscape", "selfiesegmentation", "deeplab"];
  for (var model of models) {
    if (pathname.toLowerCase().indexOf(model) >-1) {
      return model
    }
  }
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