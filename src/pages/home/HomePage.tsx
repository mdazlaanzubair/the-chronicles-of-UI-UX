import HeroSection from "./components/HeroSection";
import { IconSlider } from "../../components/IconSlider";
import { toolKit } from "../../utils/iconExporter";
import { ProjectGridSlider } from "../../components/ProjectGridSlider";
import ServicesSection from "./components/ServicesSection";
import { projects_list, case_studies } from "../../utils/constant_export";
import AboutBentoGrid from "./components/AboutBentoGrid";
import FloatingDocs from "../../components/FloatingDocs";
import { FaBriefcase, FaIdCard } from "react-icons/fa";
import { MdWorkspacesFilled } from "react-icons/md";
import SectionHeader from "../../components/SectionHeader";
import { useEffect } from "react";
import { smoothScroller } from "../../utils/pageScrollers";

const HomePage = () => {
  const navList = [
    {
      title: "About Me",
      sectionId: "about-grid-section",
      icon: <FaIdCard />,
    },
    {
      title: "Work",
      sectionId: "case-study-section-head",
      icon: <FaBriefcase />,
    },
    {
      title: "Skills",
      sectionId: "services-section-head",
      icon: <MdWorkspacesFilled />,
    },
  ];

  // hit top on page reload
  useEffect(() => smoothScroller("home-page"), []);

  return (
    <section
      id="home-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <HeroSection />
      <IconSlider icons={toolKit} />
      <AboutBentoGrid />
      <SectionHeader
        id="case-study-section-head"
        title="Projects and Business Solution"
        mode="dark"
      />

      <ProjectGridSlider direction="right" projects={projects_list} />
      <ProjectGridSlider direction="left" projects={case_studies} />
      <ServicesSection />
      <FloatingDocs navList={navList} jumpToId="home-page" />
    </section>
  );
};

export default HomePage;
