import { motion } from "framer-motion";
import { CgWorkAlt } from "react-icons/cg";
import SectionHeadBtn from "../../components/SectionHeadBtn";
import { SiNounproject } from "react-icons/si";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { smoothScroller } from "../../utils/pageScrollers";
import {
  childVariantFadeIn,
  pageTransitionVariants,
  parentVariantFadeIn,
} from "../../utils/animationVarients";

const WorkPage = () => {
  const navigate = useNavigate();
  const active_route = window.location.pathname.split("/").pop();

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <motion.section
      id="work-page"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={parentVariantFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
      >
        <motion.div
          variants={childVariantFadeIn}
          className="relative w-full h-auto grid grid-cols-2 gap-3"
        >
          <SectionHeadBtn
            label="Case Studies"
            mode={active_route === "case-studies" ? "dark" : "light"}
            icon_1={<CgWorkAlt />}
            icon_2={<CgWorkAlt />}
            onClickHandler={() => navigate("/work/case-studies")}
          />
          <SectionHeadBtn
            label="Side Projects"
            mode={active_route === "side-projects" ? "dark" : "light"}
            icon_1={<SiNounproject />}
            icon_2={<SiNounproject />}
            onClickHandler={() => navigate("/work/side-projects")}
          />
        </motion.div>

        <Outlet />
      </motion.div>
    </motion.section>
  );
};

export default WorkPage;
