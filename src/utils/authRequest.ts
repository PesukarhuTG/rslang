import axiosApi from '../http/index';
import { AxiosResponse } from 'axios';
import createUrl from './createUrl';

interface RegistrationResponse {
  name: string;
  email: string;
  password: string;
}

export const registrationUser = async (
  name: string,
  email: string,
  password: string
): Promise<AxiosResponse<RegistrationResponse>> => {
  return axiosApi
    .post<RegistrationResponse>(createUrl('users'), { name, email, password })
    .then(response => console.log(response.data)) as Promise<AxiosResponse<RegistrationResponse>>;
};

interface LoginResponse {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export const loginUser = async (email: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
  return axiosApi.post<LoginResponse>(createUrl('/signin'), { email, password });
};
