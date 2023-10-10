import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import "bootstrap/dist/css/bootstrap.min.css";

//redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//Actions
import employeesListSlice from "./actions/EmployeesActions";

const store = configureStore({
  reducer: {
    employeesList: employeesListSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
console.log("store de index", store.getState());
