import { configureStore, combineReducers } from '@reduxjs/toolkit';
import auth from './auth/authSlice';

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
});

export default store;
