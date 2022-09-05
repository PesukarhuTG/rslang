import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { LoginResponse } from '../types/responses';
import { registrationUser, loginUser } from '../utils/authRequest';
import createUrl from '../utils/createUrl';

export default class Store {
  isAuth: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(auth: boolean) {
    this.isAuth = auth;
  }

  async registration(name: string, email: string, password: string) {
    try {
      const response = await registrationUser(name, email, password);
      const res = await this.login(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem('tokenUser', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('userName', response.data.name);
      this.setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.setAuth(false);
  }

  async checkAuth(): Promise<void> {
    try {
      const response = await axios.get<LoginResponse>(createUrl(`users/${localStorage.getItem('userId')}/token`));
      localStorage.setItem('tokenUser', response.data.token);
      this.setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }
}
