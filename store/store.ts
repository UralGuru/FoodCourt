import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cafeReducer from './slices/cafeSlice';
import basketReducer from './slices/basketSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cafe: cafeReducer,
    basket: basketReducer,
    order: orderReducer
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
