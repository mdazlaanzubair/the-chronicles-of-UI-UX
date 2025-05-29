import ProjectDisplayCard from "../../components/ProjectDisplayCard";
import { case_studies } from "../../utils/constant_export";

const CaseStudiesPage = () => {
  return (
    <section
      id="work-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <div
        id="case-studies"
        className={`flex w-full h-auto bg-base-100 rounded-lg border border-base-300 p-3`}
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
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3`}
      >
        {case_studies.length &&
          case_studies.map(({ title, imgSrc, id }, index) => (
            <ProjectDisplayCard
              key={index}
              id={id}
              imgSrc={imgSrc}
              title={title}
              type="case-study"
            />
          ))}
      </div>
    </section>
  );
};

export default CaseStudiesPage;
