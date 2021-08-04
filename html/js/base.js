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

const userMarquee = () => {
  let ele = $('.username');
  for(let i of ele) {
    if (isElementOverflowing(i)) {
      wrapContentsInMarquee(i);
    }
  }
}