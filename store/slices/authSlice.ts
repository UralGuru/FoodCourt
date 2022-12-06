import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../../services/auth.service';
import { AuthStateType, loginType, registerType } from '@constants/types';

const initialState: AuthStateType = {
  isLoggedIn: false,
  accessToken: null,
  errors: null,
  expireDate: null,
  isSuccess: false,
  message: null,
  refreshToken: null,
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (loginSliceData: loginType, thunkAPI) => {
    try {
      const data = await AuthService.login(loginSliceData);
      return { user: data };
    } catch (error: any) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(await error.json());
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (loginSliceData: registerType, thunkAPI) => {
    try {
      const data = await AuthService.register(loginSliceData);
      return { user: data };
    } catch (error: any) {
      const message =
        error?.response?.data?.message || error.message || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(await error.json());
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.isLoggedIn = true;
          // state = {...action.payload.user}
          // state = action.payload.user
          state.accessToken = action.payload.user.acssessToken;
          state.errors = action.payload.user.errors;
          state.expireDate = action.payload.user.expireDate;
          state.isSuccess = action.payload.user.isSuccess;
          state.message = action.payload.user.message;
          state.refreshToken = action.payload.user.refreshToken;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state = initialState;
        }
      );
  },
});

const { actions } = userSlice;
export const { setMessage, clearMessage } = actions;
export default userSlice.reducer;
