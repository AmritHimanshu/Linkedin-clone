import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
// import changeReducer from '../features/increDecrement';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
