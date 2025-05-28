import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CredentialsPage from "../pages/CredentialsPage";
import WorkPage from "../pages/WorkPage";

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
        element: <WorkPage />,
      },
      {
        path: "/work/?:type",
        element: <WorkPage />,
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
