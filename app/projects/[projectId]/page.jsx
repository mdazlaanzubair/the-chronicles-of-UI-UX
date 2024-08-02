"use client";

import Figure from "@/app/components/generic/Figure";
import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GeneralContext } from "@/app/context/GeneralContext";
import { useRouter } from "next/navigation";

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
  const { projectData, selectProject } = useContext(GeneralContext);

  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // SELECTING THE PROJECT BY ID
    selectProject(params?.projectId);

    // SETTING SPOTLIGHT STATE VISIBLE
    // TO AVOID ANIMATION ON EVERY VIEW
    setIsVisible(true);
  }, [params]);

  if (projectData?.id === 0 || projectData?.isLocked === true)
    router.push(`/not-found`);
  else {
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
                caption="The Project Overview"
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
                        Timeline
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="project-para-style"
                      >
                        {projectData?.details?.overview?.timeline}
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
                        {projectData?.details?.overview?.sourceCode && (
                          <a
                            href={projectData?.details?.overview?.sourceCode}
                            target="_blank"
                            className="text-accent"
                          >
                            Code
                          </a>
                        )}
                        {projectData?.details?.overview?.liveUrl &&
                          projectData?.details?.overview?.sourceCode && (
                            <span className="opacity-30 px-2">{" | "}</span>
                          )}
                        {projectData?.details?.overview?.liveUrl && (
                          <a
                            href={projectData?.details?.overview?.liveUrl}
                            target="_blank"
                            className="text-accent"
                          >
                            Live URL
                          </a>
                        )}
                        {!projectData?.details?.overview?.liveUrl &&
                          !projectData?.details?.overview?.sourceCode &&
                          "None"}
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="flex items-center">
                <div className="w-full h-full flex flex-col p-6 overflow-scroll">
                  <div
                    id="Features"
                    className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                  >
                    <div className="col-span-1 flex flex-col gap-3">
                      <motion.h1
                        variants={contentVariants}
                        className="text-secondary mb-1 text-[16px] font-semibold"
                      >
                        Key features
                      </motion.h1>
                    </div>
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {projectData?.details?.solution?.para}
                      </motion.p>
                      <ul className="list-decimal pl-5">
                        {projectData?.details?.features &&
                          Object.values(
                            projectData?.details?.features?.list
                          )?.map((listItem, index) => (
                            <motion.li
                              key={index}
                              variants={contentVariants}
                              className="work-para-style"
                            >
                              <strong className="text-secondary">
                                {listItem?.title}
                              </strong>
                              <br />
                              {listItem?.desc}
                            </motion.li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
};

export default ProjectPage;
