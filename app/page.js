"use client";

import { useEffect, useState } from "react";
import ContactSection from "./components/contact/ContactSection";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/project/ProjectSection";
import WorkSection from "./components/work/WorkSection";
import { motion } from "framer-motion";

const spotLightVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

export default function Home() {
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
            background: `radial-gradient(circle at center, rgba(254,239,159, 1) 0%, rgba(254,239,159, 0.9) 50%, rgba(254,239,159, 0.2) 50%, rgba(254,239,159, 0), rgba(254,239,159, 0), transparent, transparent)`,
          }}
        />
      )}
      <div className="z-10">
        <HeroSection />
        <WorkSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}
