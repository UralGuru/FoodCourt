import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cafeReducer from './slices/cafeSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cafe: cafeReducer
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
