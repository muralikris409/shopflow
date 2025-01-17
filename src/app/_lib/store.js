import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './categoryReducer'; 
import genericReducer from './genericReducer';
import sessionReducer from "../_lib/sessionReducer"
export const makeStore = () => {
  return configureStore({
    reducer: {
      api: apiReducer, 
      generic:genericReducer,
      session: sessionReducer,
    },
  });
};
