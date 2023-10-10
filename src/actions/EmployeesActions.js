import { createSlice } from "@reduxjs/toolkit";

const employeesList = JSON.parse(localStorage.getItem("employees"));
let id = 0;

const initialState = {
  employees: employeesList || [
    {
      firstName: "jane",
      lastName: "doe",
      startDate: "01/01/2020",
      dateOfBirth: "01/01/2000",
      street: "street 2",
      city: "usa",
      state: "ny",
      zip: "12345",
      department: "Sales",
      id: id++,
    },
  ],

  error: null,
};

localStorage.setItem("employees", JSON.stringify(initialState.employees));

const employeesListSlice = createSlice({
  name: "employeesListSlice",
  initialState,

  reducers: {
    addEmployeeSuccess(state, action) {
      state.employees.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },

    addEmployeeFailure(state, action) {
      state.error = action.payload;
    },

    deleteEmployeeSuccess(state, action) {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
      localStorage.setItem("employees", JSON.stringify(state.employees));
    },

    deleteEmployeeFailure(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  addEmployeeSuccess,
  addEmployeeFailure,
  deleteEmployeeFailure,
  deleteEmployeeSuccess,
} = employeesListSlice.actions;
export default employeesListSlice.reducer;
