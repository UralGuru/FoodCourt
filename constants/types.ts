export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface AuthStateType {
  isLoggedIn: boolean;
  accessToken: string | null;
  errors: string | null;
  expireDate: string | null;
  isSuccess: boolean;
  message: string | null;
  refreshToken: string | null;
}
