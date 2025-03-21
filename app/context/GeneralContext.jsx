"use client";

import { createContext, useState } from "react";
import { caseStudyNotFound, projectListData, workListData } from "./constants";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  // MOBILE NAVE MATTERS
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // WORK SECTION MATTERS
  const [workData, setWorkData] = useState({});
  const selectWork = (workId) => {
    const filtered = workListData?.filter((data) => data?.id == workId);
    setWorkData(filtered?.length > 0 ? filtered[0] : caseStudyNotFound);
  };

  // PROJECT SECTION MATTERS
  const [projectData, setProjectData] = useState({});
  const selectProject = (projectId) => {
    const filtered = projectListData?.filter((data) => data?.id == projectId);
    setProjectData(filtered?.length > 0 ? filtered[0] : caseStudyNotFound);
  };

  return (
    <GeneralContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        workData,
        selectWork,
        projectData,
        selectProject,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
