const parseSearchParams = (key) => {
    let searchParams = new URLSearchParams(location.search)
    return searchParams.get(key)
  }
  
  const hasSearchParam = (key) => {
    let searchParams = new URLSearchParams(location.search)
    return searchParams.has(key)
  }

const urlcheck = () => {
    let path
    if(!hasSearchParam("backend")) {
        path = `?backend=wasm&mediapipe=0&model=2`;
    }
    window.history.pushState(null, null, path);
}

urlcheck()