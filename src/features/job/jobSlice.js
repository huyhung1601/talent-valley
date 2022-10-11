import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedJob: JSON.parse(window.localStorage.getItem("job")) || null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    selectJob: (state, action) => {
      state.selectedJob = action.payload;
      window.localStorage.setItem("job", JSON.stringify(state.selectedJob));
    },
  },
});

export const { selectJob } = jobSlice.actions;

export default jobSlice.reducer;
