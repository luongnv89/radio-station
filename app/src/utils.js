const getQueryValue = (key) => {
  const queryString = window.location.search.replace('?','');
  if (!queryString) return null;
  const queries = queryString.split('&');
  for (let index = 0; index < queries.length; index++) {
    const queryPaths = queries[index].split('=');
    if (queryPaths[0]===key){
      return decodeURIComponent(queryPaths[1]);
    }
  }
  return null;
};

const getHashValue = () => {
  return decodeURIComponent(window.location.hash).replace('#','');
};

const setHashValue = (value) => {
  window.location.hash = encodeURIComponent(value);
};

module.exports = {
  getQueryValue,
  getHashValue,
  setHashValue,
}