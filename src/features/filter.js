import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    course: "CBSE 9",
    cohort: "AY 2023-24",
  },
  reducers: {
    setCohort: (state, action) => {
      state.cohort = action.payload;
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { setCohort, setCourse } = authSlice.actions;

export default authSlice.reducer;
