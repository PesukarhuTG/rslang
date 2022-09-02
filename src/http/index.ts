import axios from 'axios';

const token = localStorage.getItem('tokenUser');
const axiosApi = axios.create();

axiosApi.interceptors.request.use(
  async config => {
    if (token) {
      const keys = JSON.parse(token);
      config.headers = {
        Authorization: `Bearer ${keys}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      };
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default axiosApi;
