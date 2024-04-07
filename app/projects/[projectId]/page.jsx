"use client";

import Button from "@/app/components/generic/Button";
import Figure from "@/app/components/generic/Figure";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GeneralContext } from "@/app/context/GeneralContext";

const spotLightVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 3 } },
};

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

const ProjectPage = ({ params }) => {
  const { projectData } = useContext(GeneralContext);

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), [params]);

  return (
    <motion.div
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="relative w-full h-full flex flex-col items-center justify-between gap-5"
    >
      {isVisible && (
        <motion.div
          variants={spotLightVariants}
          initial="hidden"
          animate="visible"
          className="absolute flex -top-[300%] left-1/2 -translate-x-1/2 bottom-0 right-0 w-2/4 blur-3xl"
          style={{
            background: `radial-gradient(circle at center, rgba(254,239,159, 1) 0%, rgba(254,239,159, 0.9) 50%, rgba(254,239,159, 0.3) 50%, rgba(254,239,159, 0), rgba(254,239,159, 0), transparent, transparent)`,
          }}
        />
      )}

      <div
        id="Back to Top"
        className="w-full gap-3 z-10 flex items-center justify-between p-3"
      >
        <motion.div variants={contentVariants} className="flex flex-shrink">
          <Button
            onClick={() => router.back()}
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 mb-px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            }
          />
        </motion.div>
        <div className="flex flex-grow"></div>
        <div className="flex flex-shrink"></div>
      </div>

      <div className="flex w-full h-full justify-between items-start gap-3 z-10 p-3 lg:px-16 overflow-auto">
        <div className="w-full h-full flex flex-col overflow-scroll">
          <motion.h1
            variants={contentVariants}
            className="font-display text-3xl lg:text-4xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3"
          >
            {projectData?.title}
          </motion.h1>
          <motion.p
            variants={contentVariants}
            className="text-center text-sm w-full font-bold mb-10"
          >
            {projectData?.subTitle}
          </motion.p>
          <div className="container mx-auto">
            <Figure
              className="w-3/4 h-3/2 mx-auto"
              size="w-full h-full"
              src={projectData?.details?.coverImgSrc}
              caption="The Case Study"
              tag="IMG"
            />
          </div>
          <div className="container mt-10 mx-auto">
            <div className="w-full h-full flex flex-col p-6 overflow-scroll">
              <div
                id="Overview"
                className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
              >
                <div className="col-span-1 flex flex-col gap-3">
                  <div>
                    <motion.h1
                      variants={contentVariants}
                      className="project-heading-style"
                    >
                      My Role
                    </motion.h1>
                    <motion.p
                      variants={contentVariants}
                      className="project-para-style"
                    >
                      {projectData?.details?.overview?.myRole}
                    </motion.p>
                  </div>
                  <div>
                    <motion.h1
                      variants={contentVariants}
                      className="project-heading-style"
                    >
                      The Team
                    </motion.h1>
                    <motion.p
                      variants={contentVariants}
                      className="project-para-style"
                    >
                      {projectData?.details?.overview?.team}
                    </motion.p>
                  </div>
                  <div>
                    <motion.h1
                      variants={contentVariants}
                      className="project-heading-style"
                    >
                      Timeline
                    </motion.h1>
                    <motion.p
                      variants={contentVariants}
                      className="project-para-style"
                    >
                      {projectData?.details?.overview?.timeline}
                    </motion.p>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                  <div>
                    <motion.h1
                      variants={contentVariants}
                      className="project-heading-style"
                    >
                      Overview
                    </motion.h1>
                    <motion.p
                      variants={contentVariants}
                      className="project-para-style"
                    >
                      {projectData?.details?.overview?.projectDesc?.para1}
                    </motion.p>
                    <motion.p
                      variants={contentVariants}
                      className="project-para-style"
                    >
                      {projectData?.details?.overview?.projectDesc?.para2}
                    </motion.p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="project-heading-style"
                      >
                        Tech Stack
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="project-para-style"
                      >
                        {projectData?.details?.overview?.techUsed}
                      </motion.p>
                    </div>
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="project-heading-style"
                      >
                        Source
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="project-para-style"
                      >
                        {projectData?.details?.overview?.techUsed}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
