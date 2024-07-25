import React from "react";
import IconSlider from "../generic/IconSlider";
import { techLogosArrayComplete } from "@/app/utils/iconExporter";
import Link from "next/link";
import { motion } from "framer-motion";
import BentoGrid from "./BentoGrid";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.23,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      id="hero-section"
      className="relative w-full flex flex-col items-center justify-between py-10 lg:py-16"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-0 z-10">
        <div className="w-full md:w-1/2">
          <div className="w-full lg:w-12/12">
            <motion.div variants={contentVariants}>
              <Link
                href="#contact-section"
                className="inline-flex items-center gap-3 bg-base-300/20 px-3 py-2 rounded-lg cursor-pointer mb-5"
              >
                <span className="inline-block bg-accent w-2 h-2 rounded-full shadow-2xl shadow-accent animate-pulse" />
                <span className="text-accent font-bold text-xs uppercase mr-3 mt-px">
                  Open to work
                </span>
              </Link>
            </motion.div>
            <motion.h1
              variants={contentVariants}
              className="font-display text-4xl lg:text-5xl leading-snug text-secondary font-extrabold mb-8"
            >
              Hello &amp; welcome to my digital corner!
            </motion.h1>
            <motion.p
              variants={contentVariants}
              className="text-base leading-relaxed tracking-normal font-semibold mb-3"
            >
              I&apos;m Azlaan, a full-stack developer based in Karachi,
              constantly pushing the boundaries of web development. I offer{" "}
              <span className="text-secondary">User-Centric Solutions</span>{" "}
              with{" "}
              <span className="text-secondary">Pixel-Powered Innovation</span>.
            </motion.p>
            <motion.p
              variants={contentVariants}
              className="text-base leading-relaxed tracking-normal font-semibold"
            >
              My interest in AI allows me to craft innovative solutions that{" "}
              <span className="text-secondary">leverage AI</span> to enhance{" "}
              <span className="text-secondary">UX</span> &amp;{" "}
              <span className="text-secondary">functionality</span>.
            </motion.p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/3 justify-center">
          <BentoGrid />
        </div>
      </div>
      {/* <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        className="w-full"
      >
        <IconSlider icons={techLogosArrayComplete} />
      </motion.div> */}
    </motion.section>
  );
};

export default HeroSection;
