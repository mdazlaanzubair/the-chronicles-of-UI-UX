import type { JSX } from "react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects_list } from "../../../utils/constant_export";
import { FaUserTie, FaTimeline } from "react-icons/fa6";
import { GiTechnoHeart } from "react-icons/gi";
import { IoCodeWorking } from "react-icons/io5";
import { SiLinuxserver, SiNounproject } from "react-icons/si";
import SectionHeadBtn from "../../../components/SectionHeadBtn";
import { CgWorkAlt } from "react-icons/cg";

interface ProjectDetailsInterface {
  id: number;
  title: string;
  subTitle: string;
  imgSrc: string;
  isFeatured: boolean;
  isLocked: boolean;
  details: {
    coverImgSrc: string;
    overview: {
      myRole: string;
      techUsed: string;
      timeline: string;
      sourceCode: string;
      liveUrl: string | null;
      projectDesc: {
        para1: string;
        para2: string;
        para3?: string;
        para4?: string;
      };
    };
    features: {
      para: string;
      list: {
        title: string;
        desc: string;
      }[];
    };
  };
}

const ReadProjectPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const parsedId = useMemo(() => parseInt(id || "", 10), [id]);
  const [readData, setReadData] = useState<ProjectDetailsInterface | null>(
    null
  );

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

  const {
    title,
    imgSrc,
    details: {
      coverImgSrc,
      overview: {
        myRole,
        techUsed,
        timeline,
        liveUrl,
        sourceCode,
        projectDesc: { para1, para2, para3 },
      },
      features: { list: featureList },
    },
  } = readData;

  const handleNavigate = (id: number | null, fallbackPath: string) => {
    navigate(id ? `/work/read/side-project/${id}` : fallbackPath);
  };

  return (
    <section
      id="read-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <div className="grid grid-cols-2 gap-3 w-full h-auto">
        <ProjectOverview title={title} para1={para1} para2={para2} />

        <ImageDisplay src={imgSrc} alt={title} />

        <InfoTags icon={<FaUserTie />} title="My Role" value={myRole} />
        <InfoTags icon={<FaTimeline />} title="Timeline" value={timeline} />
        <InfoTags
          icon={<GiTechnoHeart />}
          title="Tech Stack"
          value={techUsed}
          isTwoColumn={true}
        />

        <InfoTagsLink
          icon={<SiLinuxserver />}
          title="Live Url"
          value={liveUrl ? liveUrl : "No Live Url"}
        />
        <InfoTagsLink
          icon={<IoCodeWorking />}
          title="Source Code"
          value={sourceCode}
        />

        <ProjectFeatures para3={para3} featureList={featureList} />

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

        <ImageDisplay src={coverImgSrc} alt={title} />
      </div>
    </section>
  );
};

export default ReadProjectPage;

// Subcomponents
const ProjectOverview = ({
  title,
  para1,
  para2,
}: {
  title: string;
  para1: string;
  para2: string;
}) => (
  <div className="col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
    <h1 className="text-[32px] font-bold mb-3">{title}</h1>
    <p className="text-[12px] font-medium text-base-content/60 mb-3">{para1}</p>
    <p className="text-[12px] font-medium text-base-content/60">{para2}</p>
  </div>
);

const ImageDisplay = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full h-[356px] max-h-[356px] col-span-2 rounded-2xl overflow-hidden border-4 border-base-100">
    <img
      className="w-full h-full object-cover"
      src={src}
      alt={alt}
      title={alt}
    />
  </div>
);

const ProjectFeatures = ({
  para3,
  featureList,
}: {
  para3?: string;
  featureList: { title: string; desc: string }[];
}) => (
  <div className="col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
    <h1 className="text-[32px] font-bold mb-3">About</h1>
    {para3 && (
      <p className="text-[12px] font-medium text-base-content/60 mb-3">
        {para3}
      </p>
    )}
    <h2 className="text-[18px] font-semibold mb-3">Key Features</h2>
    <ul className="w-full flex flex-col gap-3">
      {featureList.map((feature, index) => (
        <li key={index} className="w-full">
          <h3 className="text-[14px] font-medium capitalize text-base-content mb-2">
            {feature.title}
          </h3>
          <p className="text-[12px] font-light capitalize text-base-content/60">
            {feature.desc}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

interface InfoTagsProps {
  title: string;
  value: string;
  icon?: JSX.Element;
  isTwoColumn?: boolean | null;
}

const InfoTags: React.FC<InfoTagsProps> = ({
  icon,
  title,
  value,
  isTwoColumn,
}) => (
  <div
    className={`${
      isTwoColumn ? "col-span-2" : "col-span-1"
    } p-5 flex items-center gap-3 bg-base-100 rounded-lg border border-base-300`}
  >
    {icon}
    <div className="flex flex-col">
      <span className="text-[12px] font-medium text-base-content/60 uppercase">
        {title}
      </span>
      <span className="text-[12px] lg:text-[14px] font-medium text-base-content">
        {value}
      </span>
    </div>
  </div>
);

const InfoTagsLink: React.FC<InfoTagsProps> = ({ icon, title, value }) => (
  <div className="col-span-1 p-5 flex items-center gap-3 bg-base-100 rounded-lg border border-base-300">
    {icon}
    <div className="flex flex-col">
      <span className="text-[12px] font-medium text-base-content/60 uppercase">
        {title}
      </span>
      <a
        href={value ? value : "#no-link"}
        className={`text-[12px] lg:text-[14px] link ${
          value ? "link-accent" : "text-base-content"
        } font-medium no-underline`}
      >
        Click here
      </a>
    </div>
  </div>
);
