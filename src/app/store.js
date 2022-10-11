import {
  combineReducers,
  configureStore,
  MiddlewareArray,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "../features/auth/authSlice";
import jobReducer from "../features/job/jobSlice";

export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    job: jobReducer,
  }),
  middleware: new MiddlewareArray().concat(thunk),
});
