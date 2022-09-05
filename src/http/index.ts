import axios from 'axios';
import { LoginResponse } from '../types/responses';
import createUrl from '../utils/createUrl';

const axiosApi = axios.create();

axiosApi.interceptors.request.use(
  async config => {
    if (localStorage.getItem('tokenUser')) {
      config.headers = {
        Authorization: `Bearer ${localStorage.getItem('tokenUser')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosApi.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (parseInt(error.response.status) === 401) {
      try {
        const response = await axios.get<LoginResponse>(createUrl(`users/${localStorage.getItem('userId')}/token`));
        localStorage.setItem('token', response.data.token);
        return axiosApi.request(originalRequest);
      } catch (e) {
        console.log(e);
      }
    }
    throw error;
  }
);

export default axiosApi;
