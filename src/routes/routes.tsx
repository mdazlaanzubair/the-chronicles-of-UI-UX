import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CredentialsPage from "../pages/CredentialsPage";
import WorkPage from "../pages/WorkPage";
import ReadPage from "../pages/read-pages/ReadPage";
import ReadCaseStudyPage from "../pages/read-pages/ReadCaseStudyPage";
import ReadProjectPage from "../pages/read-pages/ReadProjectPage";

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
        path: "/work/:type?",
        element: <WorkPage />,
      },
      {
        path: "/work/read",
        element: <ReadPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/work" replace />,
          },
          {
            path: "/work/read/case-study/:id",
            element: <ReadCaseStudyPage />,
          },
          {
            path: "/work/read/side-project/:id",
            element: <ReadProjectPage />,
          },
        ],
      },
      {
        path: "/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
