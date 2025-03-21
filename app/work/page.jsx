"use client";

import React, { useEffect, useState } from "react";
import Icon from "../components/generic/Icon";
import ImageCard from "../components/generic/ImageCard";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { workListData } from "../context/constants";

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

const WorkPage = () => {
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
            background: `radial-gradient(circle at center, rgba(97,163,212, 1) 0%, rgba(97,163,212, 0.9) 50%, rgba(97,163,212, 0.3) 50%, rgba(97,163,212, 0), rgba(97,163,212, 0), transparent, transparent)`,
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
            className="absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#61a3d4] blur-2xl transition-all ease-in-out duration-1000"
          />
          <Icon size="w-20 h-20" lightColor="97 163 212">
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </Icon>
        </motion.div>

        <motion.h1
          variants={contentVariants}
          className="font-display text-3xl lg:text-4xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3"
        >
          Executive Efforts
        </motion.h1>
        <motion.p
          variants={contentVariants}
          className="text-sm leading-relaxed tracking-normal font-semibold text-center"
        >
          Some contributions to fulfill specific business need or clients&apos;
          requirements
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5 px-6 lg:px-32">
        {workListData?.map((work, index) => (
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
              key={index}
              data={work}
              clickHandler={() => router.push(`/work/${work?.id}`)}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkPage;
