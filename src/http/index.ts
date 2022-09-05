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
    if (parseInt(error.response.status) === 401) {
      localStorage.removeItem('tokenUser');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
    }
    throw error;
  }
);

export default axiosApi;
