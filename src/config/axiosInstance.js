import axios from 'axios';
import * as config from '../config/appConfig';

let logoutHandler = null;

export const setLogoutHandler = (handler) => {
  logoutHandler = handler;
};

let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (accessToken) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
  refreshSubscribers = [];
};

const instance = axios.create({
  baseURL: config.REACT_APP_API_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshRes = await axios.post(
          `${config.REACT_APP_API_URL}/refresh-token`,
          {},
          { withCredentials: true }
        );

        if (refreshRes.status === 200) {
          const accessToken = refreshRes.data.accessToken;
          instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
          onRefreshed(accessToken);
          return instance(originalRequest);
        }
      } catch (err) {
        console.error('Token refresh failed:', err);
        if (logoutHandler) logoutHandler(); // call injected logout function
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export const axiosInstance = instance;