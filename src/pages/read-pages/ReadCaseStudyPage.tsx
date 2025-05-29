import { useEffect, useMemo, useState, type JSX } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { case_studies } from "../../utils/constant_export";
import { FaUserTie } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { SiLinuxserver, SiNounproject } from "react-icons/si";
import { FaTimeline } from "react-icons/fa6";
import SectionHeadBtn from "../../components/SectionHeadBtn";
import { CgWorkAlt } from "react-icons/cg";

interface CaseStudy {
  id: number;
  title: string;
  subTitle: string;
  url: string;
  imgSrc: string;
  isFeatured: boolean;
  isLocked: boolean;
  details: {
    images: string[];
    overview: {
      myRole: string;
      team: string;
      timeline: string;
      desc: {
        para1: string;
        para2?: string;
      };
    };
    projectDesc: {
      para1: string;
      para2?: string;
      para3?: string;
    };
    problemStatement: {
      para1: string;
      para2?: string;
      para3?: string;
      para4?: string;
    };
    solution: {
      para?: string;
      list: {
        title: string;
        desc: string;
      }[];
    };
    impact: {
      para?: string;
      list: {
        title: string;
        desc: string;
      }[];
    };
    closingNotes: {
      para1: string;
      para2?: string;
    };
  };
}

const ReadCaseStudyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const parsedId = useMemo(() => parseInt(id || "", 10), [id]);
  const [readData, setReadData] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (isNaN(parsedId)) {
      console.warn("Invalid ID:", id);
      return navigate("/work");
    }

    const matchedProject = case_studies.find(
      (project) => project.id === parsedId
    );

    if (!matchedProject) {
      console.warn("No data found for ID:", id);
      return navigate("/work");
    } else {
      setReadData(matchedProject);
    }
  }, [parsedId, navigate]);

  const { prevCaseStudyId, nextCaseStudyId } = useMemo(() => {
    const sorted = [...case_studies].sort((a, b) => a.id - b.id);
    const currentIndex = sorted.findIndex((project) => project.id === parsedId);

    return {
      prevCaseStudyId: currentIndex > 0 ? sorted[currentIndex - 1].id : null,
      nextCaseStudyId:
        currentIndex < sorted.length - 1 ? sorted[currentIndex + 1].id : null,
    };
  }, [parsedId]);

  if (!readData) return null;

  const handleNavigate = (id: number | null, fallbackPath: string) => {
    navigate(id ? `/work/read/case-study/${id}` : fallbackPath);
  };

  return (
    <section
      id="read-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <div className="grid grid-cols-2 gap-3 w-full h-auto">
        <ProjectOverview
          title={readData.title}
          paras={readData.details.overview.desc}
        />

        <ImageDisplay src={readData.imgSrc} alt={readData.title} />

        <InfoTags
          icon={<FaTimeline />}
          title="Timeline"
          value={readData.details.overview.timeline}
        />

        <InfoTagsLink
          icon={<SiLinuxserver />}
          title="Source Code"
          value={readData.url}
        />

        <InfoTags
          isTwoColumn={true}
          icon={<FaUserTie />}
          title="My Role"
          value={readData.details.overview.myRole}
        />

        <InfoTags
          isTwoColumn={true}
          icon={<RiTeamFill />}
          title="The Team"
          value={readData.details.overview.team}
        />

        <ProjectOverview
          title={"Overview"}
          paras={readData.details.projectDesc}
        />

        <ProjectOverview
          title={"Problem Statement"}
          paras={readData.details.problemStatement}
        />

        <ProjectOverviewListing
          title={"Solution"}
          para={readData.details.solution.para}
          listItem={readData.details.solution.list}
        />

        <ProjectOverviewListing
          title={"Impact"}
          para={readData.details.impact.para}
          listItem={readData.details.impact.list}
        />

        <ProjectOverview
          title={"Final Thoughts"}
          paras={readData.details.closingNotes}
        />

        <SectionHeadBtn
          mode={prevCaseStudyId ? "dark" : "light"}
          label={prevCaseStudyId ? "Previous" : "Back"}
          sub_label={prevCaseStudyId ? "Case Study" : "To Case Studies"}
          icon_1={<CgWorkAlt />}
          icon_2={<CgWorkAlt />}
          onClickHandler={() =>
            handleNavigate(prevCaseStudyId, "/work/case-studies")
          }
        />

        <SectionHeadBtn
          mode={nextCaseStudyId ? "dark" : "light"}
          label={nextCaseStudyId ? "Next" : "Jump"}
          sub_label={nextCaseStudyId ? "Case Study" : "To Projects"}
          icon_1={nextCaseStudyId ? <CgWorkAlt /> : <SiNounproject />}
          icon_2={nextCaseStudyId ? <CgWorkAlt /> : <SiNounproject />}
          onClickHandler={() =>
            handleNavigate(nextCaseStudyId, "/work/side-projects")
          }
        />

        <ImageDisplay src={readData.details.images[0]} alt={readData.title} />
      </div>
    </section>
  );
};

export default ReadCaseStudyPage;

// Subcomponents
const ProjectOverview = ({
  title,
  paras,
}: {
  title: string;
  paras: object;
}) => (
  <div className="col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
    <h1 className="text-[32px] font-bold mb-3">{title}</h1>
    {Object.entries(paras).map(([key, value], index) => (
      <p
        key={`${key}-${index}`}
        className={`text-[12px] font-medium text-base-content/60 ${
          index === Object.entries(paras).length - 1 ? "" : "mb-3"
        }`}
      >
        {value}
      </p>
    ))}
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

const ProjectOverviewListing = ({
  title,
  subTitle,
  para,
  listItem,
}: {
  title: string;
  subTitle?: string;
  para?: string;
  listItem: { title: string; desc: string }[];
}) => (
  <div className="col-span-2 p-5 bg-base-100 rounded-lg border border-base-300">
    <h1 className="text-[32px] font-bold mb-3">{title}</h1>
    {para && (
      <p className="text-[12px] font-medium text-base-content/60 mb-3">
        {para}
      </p>
    )}
    {subTitle && <h2 className="text-[18px] font-semibold mb-3">{subTitle}</h2>}
    <ul className="w-full flex flex-col gap-3">
      {listItem.map((item, index) => (
        <li key={index} className="w-full">
          <h3 className="text-[14px] font-medium capitalize text-base-content mb-2">
            {item.title}
          </h3>
          <p className="text-[12px] font-light capitalize text-base-content/60">
            {item.desc}
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
      <span className="text-[10px] font-bold text-base-content/50 uppercase">
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
      <span className="text-[10px] font-bold text-base-content/50 uppercase">
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
