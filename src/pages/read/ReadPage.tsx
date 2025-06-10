import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { smoothScroller } from "../../utils/pageScrollers";
import { pageTransitionVariants } from "../../utils/animationVarients";

const ReadPage = () => {
  // hit top on page reload
  useLayoutEffect(() => smoothScroller("app-top"), []);

  return (
    <motion.section
      id="read-page"
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <Outlet />
    </motion.section>
  );
};

export default ReadPage;
