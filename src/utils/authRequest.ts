import axiosApi from '../http/index';
import { AxiosResponse } from 'axios';
import createUrl from './createUrl';
import { RegistrationResponse, LoginResponse } from '../types/responses';

export const registrationUser = async (
  name: string,
  email: string,
  password: string
): Promise<AxiosResponse<RegistrationResponse>> => {
  return axiosApi.post<RegistrationResponse>(createUrl('users'), { name, email, password });
};

export const loginUser = async (email: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
  return axiosApi.post<LoginResponse>(createUrl('/signin'), { email, password });
};
