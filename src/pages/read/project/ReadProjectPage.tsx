import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects_list } from "../../../utils/constant_export";
import { FaUserTie, FaTimeline } from "react-icons/fa6";
import { GiTechnoHeart } from "react-icons/gi";
import { IoCodeWorking } from "react-icons/io5";
import { SiLinuxserver, SiNounproject } from "react-icons/si";
import SectionHeadBtn from "../../../components/SectionHeadBtn";
import { CgWorkAlt } from "react-icons/cg";
import {
  ImageDisplay,
  InfoTags,
  InfoTagsLink,
  ProjectOverview,
} from "./components";
import type { Project } from "./components/projects-interface";
import { parentVariantFadeIn } from "../../../utils/animationVarients";

const ReadProjectPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const parsedId = useMemo(() => parseInt(id || "", 10), [id]);
  const [readData, setReadData] = useState<Project | null>(null);

  useEffect(() => {
    if (isNaN(parsedId)) {
      console.warn("Invalid ID:", id);
      return navigate("/work");
    }

    const matchedProject = projects_list.find(
      (project) => project.id === parsedId
    );

    if (!matchedProject) {
      console.warn("No data found for ID:", id);
      return navigate("/work");
    } else {
      setReadData(matchedProject);
    }
  }, [parsedId, navigate]);

  const { prevProjectId, nextProjectId } = useMemo(() => {
    const sorted = [...projects_list].sort((a, b) => a.id - b.id);
    const currentIndex = sorted.findIndex((project) => project.id === parsedId);

    return {
      prevProjectId: currentIndex > 0 ? sorted[currentIndex - 1].id : null,
      nextProjectId:
        currentIndex < sorted.length - 1 ? sorted[currentIndex + 1].id : null,
    };
  }, [parsedId]);

  if (!readData) return null;

  const handleNavigate = (id: number | null, fallbackPath: string) => {
    navigate(id ? `/work/read/side-project/${id}` : fallbackPath);
  };

  return (
    <motion.section
      id="read-project-page"
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <ImageDisplay src={readData.img} alt={readData.title} />

      <div className="grid grid-cols-2 gap-3 w-full h-auto">
        <InfoTags
          icon={<FaUserTie />}
          title="My Role"
          value={readData.details.overview.myRole}
        />
        <InfoTags
          icon={<FaTimeline />}
          title="Timeline"
          value={readData.details.overview.timeline}
        />
        <InfoTags
          icon={<GiTechnoHeart />}
          title="Tech Stack"
          value={readData.details.overview.techUsed}
          isTwoColumn={true}
        />

        <InfoTagsLink
          icon={<SiLinuxserver />}
          title="Live Url"
          value={readData.details.overview.liveUrl}
        />
        <InfoTagsLink
          icon={<IoCodeWorking />}
          title="Source Code"
          value={readData.details.overview.sourceCode}
        />
      </div>

      <ProjectOverview project={readData} />

      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3 w-full h-auto"
      >
        <SectionHeadBtn
          mode={prevProjectId ? "dark" : "light"}
          label={prevProjectId ? "Previous" : "Back"}
          sub_label={prevProjectId ? "Project" : "To Projects"}
          icon_1={<SiNounproject />}
          icon_2={<SiNounproject />}
          onClickHandler={() =>
            handleNavigate(prevProjectId, "/work/side-projects")
          }
        />

        <SectionHeadBtn
          mode={nextProjectId ? "dark" : "light"}
          label={nextProjectId ? "Next" : "Jump"}
          sub_label={nextProjectId ? "Project" : "To Case Studies"}
          icon_1={nextProjectId ? <SiNounproject /> : <CgWorkAlt />}
          icon_2={nextProjectId ? <SiNounproject /> : <CgWorkAlt />}
          onClickHandler={() =>
            handleNavigate(nextProjectId, "/work/case-studies")
          }
        />
      </motion.div>

      <ImageDisplay src={readData.details.coverImgSrc} alt={readData.title} />
    </motion.section>
  );
};

export default ReadProjectPage;
