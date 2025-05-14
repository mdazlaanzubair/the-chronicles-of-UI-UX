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
        path: "/case-studies",
        element: <h1>Case Studies</h1>,
      },
      {
        path: "/personal-projects",
        element: <h1>Personal Projects</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
