import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = { ...action.payload };
      window.localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutSuccess: (state) => {
      state.user = null;
      window.localStorage.clear();
      window.location.reload();
    },
    registerSuccess: (state, action) => {
      state.user = { ...action.payload };
      window.localStorage.setItem("user", JSON.stringify(action.payload));
    },
    getProfileSuccess: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    getMyJobsSuccess: (state, action) => {
      state.user = { ...state.user, myJobs: action.payload };
    },
    saveJobSuccess: (state, action) => {
      window.localStorage.setItem("user", JSON.stringify(state.user));
    },
    applyJobSuccess: (state, action) => {
      // const appliedJob = {
      //   job: { id: action.payload },
      //   status: "applied",
      //   updatedAt: new Date().toDateString(),
      // };
      // const jobIndex = state.user.myJobs.findIndex(
      //   (x) => x.job.id === action.payload
      // );
      // if (jobIndex < 0) {
      //   state.user.myJobs.push(appliedJob);
      // } else {
      //   state.user.myJobs.splice(jobIndex, 1, appliedJob);
      // }
      // window.localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeFromMyJobsSuccess: (state, action) => {
      state.user.myJobs = state.user.myJobs.filter(
        (x) => x.job.id !== action.payload
      );
      window.localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const {
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  getMyJobsSuccess,
  getProfileSuccess,
  saveJobSuccess,
  applyJobSuccess,
  removeFromMyJobsSuccess,
} = authSlice.actions;

export default authSlice.reducer;
