import axios from 'axios';
import { UserRegisterRequest, UserLoginRequest } from '@constants/types';

const API_URL = 'http://food-court.tk/api/v1.0/';

const register = async (regData: UserRegisterRequest) => {
  const response = await axios.post(API_URL + 'auth/registration', regData);
  return response.data;
};

const login = async (logData: UserLoginRequest) => {
  const response = await axios.post(API_URL + 'auth/login', logData);
  if(response.data.acssessToken) {
    localStorage.setItem('access-token', response.data.acssessToken);
  }
  return response.data;
};

const loginWidthGoogle = async () => {
  const response = await axios.post(
    'http://food-court.tk:8080/v1.0/auth/account/external-login?provider=Google&backUrl=/home'
  );
  return response.data;
};

const logout = async () => {
  const response = await axios.post(API_URL + 'signout');
  return response.data;
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
