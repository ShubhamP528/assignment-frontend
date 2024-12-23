// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../features/students";
import filterReducer from "../features/filter";

const store = configureStore({
  reducer: {
    student: studentsReducer,
    filter: filterReducer,
  },
});

export default store;
