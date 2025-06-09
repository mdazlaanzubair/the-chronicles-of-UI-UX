import { motion } from "framer-motion";
import ProjectDisplayCard from "../../../components/ProjectDisplayCard";
import {
  childVariantFadeIn,
  parentVariantFadeIn,
} from "../../../utils/animationVarients";
import { case_studies } from "../../../utils/constant_export";

const CaseStudiesPage = () => {
  return (
    <motion.section
      id="work-page"
      variants={parentVariantFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <motion.div
        id="case-studies"
        variants={childVariantFadeIn}
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
      </motion.div>

      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`w-full h-auto p-0 m-0 flex flex-col items-center justify-start gap-3`}
      >
        {case_studies.length &&
          case_studies.map(({ title, img, id }, index) => (
            <motion.div
              variants={childVariantFadeIn}
              className="flex flex-col items-center justify-center gap-3 w-full h-auto"
            >
              <ProjectDisplayCard
                key={index}
                id={id}
                imgSrc={img}
                title={title}
                type="case-study"
              />
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
};

export default CaseStudiesPage;
