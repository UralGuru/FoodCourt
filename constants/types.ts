export type loginType = {
  email: string;
  password: string;
};

export type registerType = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type AuthStateType = {
  isLoggedIn: boolean;
  accessToken: string | null;
  errors: string | null;
  expireDate: string | null;
  isSuccess: boolean;
  message: string | null;
  refreshToken: string | null;
};

export type StoreType = {};
