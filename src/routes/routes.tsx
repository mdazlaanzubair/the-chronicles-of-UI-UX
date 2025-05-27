import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CredentialsPage from "../pages/CredentialsPage";

export const app_router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/credentials",
        element: <CredentialsPage />,
      },
      {
        path: "/work",
        element: <h1>Work</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
