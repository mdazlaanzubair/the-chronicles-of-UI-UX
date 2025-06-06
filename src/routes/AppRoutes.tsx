// src/routes/AppRoutes.jsx
import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

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

      <Route path="contact" element={<h1>Contact Me</h1>} /> 
    </Route>
  </Routes>
);

export default AppRoutes;
