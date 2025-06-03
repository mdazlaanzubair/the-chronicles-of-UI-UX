import ProjectDisplayCard from "../../../components/ProjectDisplayCard";
import { projects_list } from "../../../utils/constant_export";

const ProjectsPage = () => {
  return (
    <section
      id="side-projects"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <div
        className={`flex w-full h-auto bg-base-100 rounded-lg border border-base-300 p-3`}
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
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3`}
      >
        {projects_list.length &&
          projects_list.map(({ title, imgSrc, id }, index) => (
            <ProjectDisplayCard
              key={index}
              id={id}
              imgSrc={imgSrc}
              title={title}
              type="side-project"
            />
          ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
