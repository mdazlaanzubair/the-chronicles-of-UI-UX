"use client";

import React, { useContext, useEffect, useState } from "react";
import Icon from "../components/generic/Icon";
import ImageCard from "../components/generic/ImageCard";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { GeneralContext } from "../context/GeneralContext";
import { projectListData } from "../context/constants";

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

const ProjectsPage = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <motion.div
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="relative w-full flex flex-col items-center justify-between gap-5 py-6 lg:py-16"
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

      <div className="flex flex-col items-center mt-5 z-10 px-6 lg:px-32">
        <motion.div variants={contentVariants} className="relative">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  ease: "easeOut",
                  duration: 0.3,
                },
              },
            }}
            className="absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#feef9f] blur-2xl transition-all ease-in-out duration-1000"
          />
          <Icon size="w-20 h-20" lightColor="254 239 159">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </Icon>
        </motion.div>

        <motion.h1
          variants={contentVariants}
          className="font-display text-3xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3"
        >
          Personal Projects
        </motion.h1>
        <motion.p
          variants={contentVariants}
          className="text-sm leading-relaxed tracking-normal font-semibold text-center"
        >
          Things I built while learning, exploring, testing and trying the web
          technologies
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 px-6 lg:px-32">
        {projectListData?.map((project, index) => (
          <motion.div
            variants={contentVariants}
            key={index}
            className={
              index === 1 ||
              index === 2 ||
              index === 5 ||
              index === 6 ||
              index === 9
                ? "col-span-1 lg:col-span-2"
                : "col-span-1"
            }
          >
            <ImageCard
              data={project}
              clickHandler={() => router.push(`/projects/${project?.id}`)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
