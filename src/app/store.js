import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {},
  middleware: new MiddlewareArray().concat(thunk),
});
