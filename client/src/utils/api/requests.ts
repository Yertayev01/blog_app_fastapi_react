import { onSuccess, onFailure, userType, newArticleType } from '../../types';
import { getToken, setToken } from '../auth';
import { easyFetch } from './easyFetch';

type fetchCallType = (onSuccess?: onSuccess, onFailure?: onFailure) => any;
type userFetchType = (
  body: userType,
  onSuccess?: onSuccess,
  onFailure?: onFailure
) => any;

type postArticleType = (
  id: number,
  body: newArticleType,
  onSuccess?: onSuccess,
  onFailure?: onFailure
) => any;

type likeArticleType = (
  id: number,
  onSuccess?: onSuccess,
  onFailure?: onFailure
) => any;

export const getUsers: fetchCallType = async (onSuccess, onFailure) => {
  try {
    const data = await easyFetch.get('/users');
    onSuccess?.(data);
    return data;
  } catch (error) {
    onFailure?.(error);
  }
};

export const getArticles: fetchCallType = async (onSuccess, onFailure) => {
  const access_token = getToken();
  try {
    const data = await easyFetch.get('/articles', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    onSuccess?.(data);
    return data;
  } catch (error) {
    onFailure?.(error);
  }
};

export const fetchCurrentUser: fetchCallType = async (onSuccess, onFailure) => {
  const access_token = getToken();

  try {
    if (!access_token) {
      return;
    }
    const data = await easyFetch.get('/token/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    onSuccess?.(data);
  } catch (error) {
    onFailure?.(error);
  }
};

export const loginUser: userFetchType = async (body, onSuccess, onFailure) => {
  const formData = `username=${body.username}&password=${body.password}`;
  try {
    const data = await easyFetch.post('/token', formData, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
    });
    setToken(data);
    onSuccess?.(data);
  } catch (error) {
    onFailure?.(error);
  }
};

export const signupUser: userFetchType = async (body, onSuccess, onFailure) => {
  try {
    const data = await easyFetch.post('/users', body);
    onSuccess?.(data);
  } catch (error) {
    onFailure?.(error);
  }
};

export const postArticle: postArticleType = async (
  id,
  body,
  onSuccess,
  onFailure
) => {
  try {
    const data = await easyFetch.post(`/users/${id}/articles`, body);
    onSuccess?.(data);
    return data;
  } catch (error) {
    onFailure?.(error);
  }
};

export const likeArticle: likeArticleType = async (
  id,
  onSuccess,
  onFailure
) => {
  try {
    const access_token = getToken();

    const data = await easyFetch.post(
      `/articles/${id}/like`,
      { content: '' },
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    onSuccess?.(data);
    return data;
  } catch (error) {
    onFailure?.(error);
  }
};
