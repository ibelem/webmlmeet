const parseSearchParams = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

const hasSearchParam = (key) => {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has(key);
};
