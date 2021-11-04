const fetchSet = (url, thenFunc, finalFunc) => {
  fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      throw res;
    })
    .then((data) => {
      thenFunc(data);
    })
    .catch((err) => {
      // console.log(err);
    })
    .finally(() => {
      finalFunc();
    });
};

module.exports = { fetchSet };
