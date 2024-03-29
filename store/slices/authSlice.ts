import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, UserLoginRequest, UserRegisterRequest } from '@constants/types';
import AuthService from 'services/auth.service';

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  accessToken: '',
  errors: '',
  expireDate: '',
  isSuccess: false,
  message: '',
  refreshToken: '',
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (loginSliceData: UserLoginRequest, thunkAPI) => {
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
  async (loginSliceData: UserRegisterRequest, thunkAPI) => {
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
  initialState: INITIAL_STATE,
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
      .addCase(loginThunk.fulfilled, (state, action) => {
        // напрямую state = action.payload.user не работает (
        state.isLoggedIn = true;
        state.accessToken = action.payload.user.acssessToken;
        state.errors = action.payload.user.errors;
        state.expireDate = action.payload.user.expireDate;
        state.isSuccess = action.payload.user.isSuccess;
        state.message = action.payload.user.message;
        state.refreshToken = action.payload.user.refreshToken;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.message = 'Error';
      })

        .addCase(registerThunk.fulfilled, (state,action)=>{
            // state.isSuccess = action.payload.user.isSuccess;
            // state.message = action.payload.user.message;
        })
        .addCase(registerThunk.rejected, (state, action) => {
            state.message = 'Error';
        })

    ;
  },
});

const { actions } = userSlice;
export const { setMessage, clearMessage } = actions;
export default userSlice.reducer;
