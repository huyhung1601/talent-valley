import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: window.localStorage.getItem("user") || null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state) => {
      state.user = null;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logoutSuccess, registerSuccess } =
  authSlice.actions;

export default authSlice.reducer;
