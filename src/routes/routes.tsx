import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import CredentialsPage from "../pages/CredentialsPage";
import WorkPage from "../pages/work-pages/WorkPage";
import ReadPage from "../pages/read-pages/ReadPage";
import ReadCaseStudyPage from "../pages/read-pages/ReadCaseStudyPage";
import ReadProjectPage from "../pages/read-pages/ReadProjectPage";
import CaseStudiesPage from "../pages/work-pages/CaseStudiesPage";
import ProjectsPage from "../pages/work-pages/ProjectsPage";

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
        path: "home",
        element: <Navigate to="/" replace />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "credentials",
        element: <CredentialsPage />,
      },
      {
        path: "work",
        element: <WorkPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/work/case-studies" replace />,
          },
          {
            path: "case-studies",
            element: <CaseStudiesPage />,
          },
          {
            path: "side-projects",
            element: <ProjectsPage />,
          },
        ],
      },
      {
        path: "work/read",
        element: <ReadPage />,
        children: [
          {
            index: true,
            element: <Navigate to="/work" replace />,
          },
          {
            path: "case-study/:id",
            element: <ReadCaseStudyPage />,
          },
          {
            path: "side-project/:id",
            element: <ReadProjectPage />,
          },
        ],
      },
      {
        path: "contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
