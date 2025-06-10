import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "../App";
import {
  HomePage,
  AboutPage,
  CredentialsPage,
  ReadPage,
  WorkPage,
  CaseStudiesPage,
  ReadCaseStudyPage,
  ProjectsPage,
  ReadProjectPage,
  ContactPage,
  PageNotFound,
} from "../pages";

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
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
