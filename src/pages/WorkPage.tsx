import { CgWorkAlt } from "react-icons/cg";
import SectionHeadBtn from "../components/SectionHeadBtn";
import { SiNounproject } from "react-icons/si";
import { useState, useEffect } from "react";
import ProjectDisplayCard from "../components/ProjectDisplayCard";
import { case_studies, projects_list } from "../utils/constant_export";
import { useParams } from "react-router-dom";

const WorkPage = () => {
  let { type } = useParams();
  const [activeTab, setActiveTab] = useState<string>();

  useEffect(() => {
    if (type) {
      setActiveTab(type);
    } else {
      setActiveTab("case-studies");
    }
  }, [type]);

  return (
    <section
      id="work-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <strong>{type}</strong>
      <div className="relative w-full h-auto grid grid-cols-2 gap-3">
        <SectionHeadBtn
          label="Case Studies"
          mode={activeTab === "case-studies" ? "dark" : "light"}
          icon_1={<CgWorkAlt />}
          icon_2={<CgWorkAlt />}
          onClickHandler={() => setActiveTab("case-studies")}
        />
        <SectionHeadBtn
          label="Side Projects"
          mode={activeTab === "side-projects" ? "dark" : "light"}
          icon_1={<SiNounproject />}
          icon_2={<SiNounproject />}
          onClickHandler={() => setActiveTab("side-projects")}
        />
      </div>
      <div
        id="case-studies"
        className={`flex w-full h-auto bg-base-100 rounded-lg border border-base-300 p-3 ${
          activeTab === "case-studies"
            ? "relative opacity-100 z-0"
            : "absolute opacity-0 -z-50"
        } transition-opacity ease-in-out duration-500`}
      >
        <p className="text-[14px] font-medium text-base-content/60 leading-relaxed -tracking-tight">
          Contributed solutions tailored to specific{" "}
          <span className="text-base-content font-semibold">
            business needs
          </span>
          , aimed at{" "}
          <span className="text-base-content font-semibold">
            simplifying workflows
          </span>
          ,{" "}
          <span className="text-base-content font-semibold">
            reducing redundancy
          </span>
          , and{" "}
          <span className="text-base-content font-semibold">human error</span>.
        </p>
      </div>
      <div
        id="side-projects"
        className={`flex w-full h-auto bg-base-100 rounded-lg border border-base-300 p-3 ${
          activeTab === "side-projects"
            ? "relative opacity-100 z-0"
            : "absolute opacity-0 -z-50"
        } transition-opacity ease-in-out duration-500`}
      >
        <p className="text-[14px] font-medium text-base-content/60 leading-relaxed -tracking-tight">
          Projects developed while{" "}
          <span className="text-base-content font-semibold">learning</span>,{" "}
          <span className="text-base-content font-semibold">exploring</span>,
          and{" "}
          <span className="text-base-content font-semibold">experimenting</span>{" "}
          with{" "}
          <span className="text-base-content font-semibold">
            modern web technologies
          </span>
          .
        </p>
      </div>

      <div
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3 ${
          activeTab === "case-studies"
            ? "relative opacity-100 z-0"
            : "absolute opacity-0 -z-50"
        } transition-opacity ease-in-out duration-500`}
      >
        {case_studies.length &&
          [...case_studies]
            .reverse()
            .map(({ title, imgSrc }, index) => (
              <ProjectDisplayCard index={index} imgSrc={imgSrc} title={title} />
            ))}
      </div>

      <div
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3 ${
          activeTab === "side-projects"
            ? "relative opacity-100 z-0"
            : "absolute opacity-0 -z-50"
        } transition-opacity ease-in-out duration-500`}
      >
        {projects_list.length &&
          [...projects_list]
            .reverse()
            .map(({ title, imgSrc }, index) => (
              <ProjectDisplayCard index={index} imgSrc={imgSrc} title={title} />
            ))}
      </div>
    </section>
  );
};

export default WorkPage;
