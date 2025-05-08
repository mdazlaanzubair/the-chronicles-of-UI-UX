import React from "react";
import { createBrowserRouter, Navigate } from "react-router";

import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

export const app_router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
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
