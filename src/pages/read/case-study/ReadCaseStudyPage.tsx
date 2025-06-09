import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { case_studies } from "../../../utils/constant_export";
import { SiGoogleanalytics, SiNounproject } from "react-icons/si";
import SectionHeadBtn from "../../../components/SectionHeadBtn";
import type { CaseStudy } from "./components/case-study-interface";
import { IoBriefcase } from "react-icons/io5";
import {
  ContributionsComponent,
  HeaderComponent,
  ImpactComponent,
  OverviewComponent,
  ProblemComponent,
  SolutionsComponent,
} from "./components";
import FloatingDocs from "../../../components/FloatingDocs";
import { FaInfo } from "react-icons/fa";
import { TbBinocularsFilled } from "react-icons/tb";
import { HiLightBulb, HiMiniPresentationChartLine } from "react-icons/hi2";
import { BiSolidCommentError } from "react-icons/bi";

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

  const navList = [
    {
      title: "Key Info",
      sectionId: "header-section",
      icon: <FaInfo className="text-base" />,
    },
    {
      title: "Overview",
      sectionId: "overview-section",
      icon: <TbBinocularsFilled className="text-2xl" />,
    },
    {
      title: "Problem Statement",
      sectionId: "problem-section",
      icon: <BiSolidCommentError />,
    },
    {
      title: "Solution",
      sectionId: "solution-section",
      icon: <HiLightBulb />,
    },
    {
      title: "Impact Analysis",
      sectionId: "impact-section",
      icon: <SiGoogleanalytics />,
    },
    {
      title: "Contributions",
      sectionId: "contributions-section",
      icon: <HiMiniPresentationChartLine />,
    },
  ];

  return (
    <section
      id="read-case-study-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <div className="border-4 border-base-300 rounded-lg overflow-hidden">
        <img
          src={readData.coverImg}
          alt={`${readData.title} Case Study Image: ${readData.sub_title}`}
        />
      </div>

      <HeaderComponent
        title={readData.title}
        sub_title={readData.sub_title}
        overview={readData.overview}
      />
      <OverviewComponent overview={readData.overview} />
      <ProblemComponent problem={readData.problem} />
      <SolutionsComponent solutions={readData.solutions} />
      <ImpactComponent impact={readData.impact} />
      <ContributionsComponent contributions={readData.contributions} />
      {/* <ConclusionComponent conclusion={readData.conclusion} /> */}

      <div className="grid grid-cols-2 gap-3 w-full h-auto">
        <SectionHeadBtn
          mode={prevCaseStudyId ? "dark" : "light"}
          label={prevCaseStudyId ? "Previous" : "Back"}
          sub_label={prevCaseStudyId ? "Case Study" : "To Case Studies"}
          icon_1={<IoBriefcase />}
          icon_2={<IoBriefcase />}
          onClickHandler={() =>
            handleNavigate(prevCaseStudyId, "/work/case-studies")
          }
        />

        <SectionHeadBtn
          mode={nextCaseStudyId ? "dark" : "light"}
          label={nextCaseStudyId ? "Next" : "Jump"}
          sub_label={nextCaseStudyId ? "Case Study" : "To Projects"}
          icon_1={nextCaseStudyId ? <IoBriefcase /> : <SiNounproject />}
          icon_2={nextCaseStudyId ? <IoBriefcase /> : <SiNounproject />}
          onClickHandler={() =>
            handleNavigate(nextCaseStudyId, "/work/side-projects")
          }
        />
      </div>

      <FloatingDocs navList={navList} />
    </section>
  );
};

export default ReadCaseStudyPage;
