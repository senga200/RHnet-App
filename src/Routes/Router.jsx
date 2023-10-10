import React from "react";
import Error from "../pages/Error404";
import CreateEmployee from "../pages/CreateEmployee";
import CurrentEmployees from "../pages/CurrentEmployees";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee />,
  },
  {
    path: "/employee-list",
    element: <CurrentEmployees />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default Router;
