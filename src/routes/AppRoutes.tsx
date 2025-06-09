// src/routes/AppRoutes.jsx
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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
} from "../pages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="credentials" element={<CredentialsPage />} />

      <Route path="work" element={<WorkPage />}>
        <Route index element={<Navigate to="/work/case-studies" replace />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="side-projects" element={<ProjectsPage />} />
      </Route>

      <Route path="work/read" element={<ReadPage />}>
        <Route index element={<Navigate to="/work" replace />} />
        <Route path="case-study/:id" element={<ReadCaseStudyPage />} />
        <Route path="side-project/:id" element={<ReadProjectPage />} />
      </Route>

      <Route path="contact" element={<ContactPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
