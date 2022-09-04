import { makeAutoObservable } from 'mobx';
import { registrationUser, loginUser } from '../utils/authRequest';

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
      console.log(response);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await loginUser(email, password);
      console.log(response);
      localStorage.setItem('tokenUser', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('userName', response.data.name);
      this.setAuth(true);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.setAuth(true);
  }
}
