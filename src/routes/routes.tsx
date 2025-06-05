import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import CredentialsPage from "../pages/credentials/CredentialsPage";
import WorkPage from "../pages/work/WorkPage";
import ReadPage from "../pages/read/ReadPage";
import ReadCaseStudyPage from "../pages/read/case-study/ReadCaseStudyPage";
import ReadProjectPage from "../pages/read/project/ReadProjectPage";
import CaseStudiesPage from "../pages/work/case-study/CaseStudiesPage";
import ProjectsPage from "../pages/work/project/ProjectsPage";

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
