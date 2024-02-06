import {
  createBrowserRouter,
} from "react-router-dom";
import AuthLayout from "../layouts/auth/layout";
import Login from '../pages/auth/login'

const routerGlobal = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children: [
      {
        path: "signin",
        element: <Login />
      }
    ]
  },
]);

export {routerGlobal}