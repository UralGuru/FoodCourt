export interface LOGIN {
  email: string;
  password: string;
}

export interface REGISTER {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export interface AUTH_STATE {
  isLoggedIn: boolean;
  accessToken: string | null;
  errors: string | null;
  expireDate: string | null;
  isSuccess: boolean;
  message: string | null;
  refreshToken: string | null;
};
