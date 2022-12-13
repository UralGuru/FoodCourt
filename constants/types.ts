export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string;
  errors: string;
  expireDate: string;
  isSuccess: boolean;
  message: string;
  refreshToken: string;
}
