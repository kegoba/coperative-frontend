
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reduxServices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
