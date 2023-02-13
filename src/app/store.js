import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import profilePhotoReducer from '../features/profilePhoto';
// import changeReducer from '../features/increDecrement';

export const store = configureStore({
  reducer: {
    user: userReducer,
    profilePhoto: profilePhotoReducer,
  },
});
