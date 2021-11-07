import Cookies from "js-cookie";

export const getToken = () => {
  return Cookies.get("access_token");
};

export const setToken = (token) => {
  const expires = 60 * 60 * 1000;
  const inOneHour = new Date(new Date().getTime() + expires);
  Cookies.set("access_token", token.access_token, { expires: inOneHour });
};

export const removeToken = () => {
  Cookies.remove("access_token");
};

export const isAuthenticated = () => !!getToken();
