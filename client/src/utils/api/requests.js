import { getToken } from "../auth";
import { easyFetch } from "./easyFetch";

export const getUsers = async (handleData, handleError) => {
  try {
    const data = await easyFetch.get("/users");
    handleData(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const fetchCurrentUser = async (handleData, handleError) => {
  const access_token = getToken();

  try {
    if (!access_token) {
      return;
    }
    const data = await easyFetch.get("/token/user", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    handleData(data);
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (body, handleData, handleError) => {
  const formData = `username=${body.username}&password=${body.password}`;
  try {
    const data = await easyFetch.post("/token", formData, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });
    handleData(data);
  } catch (error) {
    handleError(error);
  }
};
