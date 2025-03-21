"use client";

import { useContext, useEffect, useState } from "react";
import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/project/ProjectSection";
import WorkSection from "./components/work/WorkSection";
import { motion } from "framer-motion";
import { GeneralContext } from "./context/GeneralContext";

const spotLightVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

export default function Home() {
  const { workList, selectWork, projectList, selectProject } =
    useContext(GeneralContext);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <div className="flex flex-col w-full mx-auto px-6 lg:px-32 overflow-clip">
      {isVisible && (
        <motion.div
          variants={spotLightVariants}
          initial="hidden"
          animate="visible"
          className="absolute flex -top-[300%] -left-[300%] bottom-0 right-0 blur-3xl"
          style={{
            background: `radial-gradient(circle at center, rgba(255,255,255, 1) 0%, rgba(255,255,255, 0.9) 50%, rgba(255,255,255, 0.2) 50%, rgba(255,255,255, 0), rgba(255,255,255, 0), transparent, transparent)`,
          }}
        />
      )}
      <div className="z-10">
        <HeroSection />
        <ContactSection />
      </div>
    </div>
  );
}
