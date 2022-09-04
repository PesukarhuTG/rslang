import axios from 'axios';

const token = localStorage.getItem('tokenUser');
const axiosApi = axios.create();

axiosApi.interceptors.request.use(
  async config => {
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
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

export default axiosApi;
