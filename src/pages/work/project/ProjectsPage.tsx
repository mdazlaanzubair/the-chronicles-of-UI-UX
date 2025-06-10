import { motion } from "framer-motion";
import ProjectDisplayCard from "../../../components/ProjectDisplayCard";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../../utils/animationVarients";
import { projects_list } from "../../../utils/constant_export";

const ProjectsPage = () => {
  return (
    <motion.section
      id="side-projects"
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <motion.div
        variants={childVariantFadeIn}
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
      </motion.div>

      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3`}
      >
        {projects_list.length &&
          projects_list.map(({ title, img, id }, index) => (
            <motion.div
              key={index}
              variants={childVariantFadeIn}
              className="flex flex-col items-center justify-center gap-3 w-full h-auto"
            >
              <ProjectDisplayCard
                id={id}
                imgSrc={img}
                title={title}
                type="side-project"
              />
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsPage;
