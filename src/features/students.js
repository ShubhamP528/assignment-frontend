import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    students: [],
    showDialog: false,
    isEdit: false,
    EditedData: {},
  },
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      state.students = action.payload;
    },
    setDialog: (state, action) => {
      state.showDialog = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setEditedData: (state, action) => {
      state.EditedData = action.payload;
    },
    setUpdatedData: (state, action) => {
      const updatedStudents = state.students.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
      state.students = updatedStudents;
    },
    deleteStudent: (state, action) => {
      const updatedStudents = state.students.filter(
        (student) => student.id !== action.payload
      );
      state.students = updatedStudents;
    },
  },
});

export const {
  setData,
  setDialog,
  setIsEdit,
  setEditedData,
  setUpdatedData,
  deleteStudent,
} = authSlice.actions;

export default authSlice.reducer;
