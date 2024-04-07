"use client";

import { createContext, useEffect, useState } from "react";
import { projectListData, workListData } from "./constants";
import { useRouter } from "next/navigation";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const router = useRouter();

  // MOBILE NAVE MATTERS
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // WORK SECTION MATTERS
  const [workList, setWorkList] = useState(null);
  const [workData, setWorkData] = useState(null);
  const selectWork = (data) => {
    setWorkData(data);
    router.push(`/work/${data?.id}`);
  };
  useEffect(() => setWorkList(workListData ?? []));
  useEffect(() => setWorkData(workListData[0] ?? {}));

  // PROJECT SECTION MATTERS
  const [projectList, setProjectList] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const selectProject = (data) => {
    setProjectData(data);
    router.push(`/projects/${data?.id}`);
  };
  useEffect(() => setProjectList(projectListData ?? []));
  useEffect(() => setProjectData(projectListData[0] ?? {}));

  return (
    <GeneralContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        workList,
        workData,
        selectWork,
        projectList,
        projectData,
        selectProject,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
