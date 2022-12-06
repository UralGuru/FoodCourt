import axios from 'axios';
import { REGISTER, LOGIN } from '@constants/types';

const API_URL = 'http://food-court.tk/api/v1.0/';

const register = (regData: REGISTER) => {
  return axios.post(API_URL + 'auth/registration', regData).then((response) => {
    if (response.data.username) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const login = (logData: LOGIN) => {
  return axios.post(API_URL + 'auth/login', logData).then((response) => {
    if (response.data.username) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  });
};

const loginWidthGoogle = () => {
  return axios
    .post(
      'http://food-court.tk:8080/v1.0/auth/account/external-login?provider=Google&backUrl=/home'
    )
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  return axios.post(API_URL + 'signout').then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return null;
};

const AuthService = {
  register,
  login,
  loginWidthGoogle,
  logout,
  getCurrentUser,
};

export default AuthService;
