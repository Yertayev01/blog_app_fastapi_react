const getToken = () => {
  const token = localStorage.getItem("token");
  return JSON.parse(token);
};

const setToken = async (token) => {
  localStorage.setItem("token", JSON.stringify(token));
  return;
};

module.exports = {
  setToken,
  getToken,
};
