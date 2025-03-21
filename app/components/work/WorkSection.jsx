"use client";

import React from "react";
import Button from "../generic/Button";
import Icon from "../generic/Icon";
import { useRouter } from "next/navigation";
import ImageCard from "../generic/ImageCard";
import { motion } from "framer-motion";

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

const WorkSection = ({ workList, selectWork }) => {
  const router = useRouter();
  return (
    <motion.section
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      id="work-section"
      className="relative w-full flex flex-col items-center justify-between gap-5 py-10 lg:py-16"
    >
      <div className="flex w-full items-start justify-between gap-5 mb-5">
        <div
          className="flex group items-center gap-3 cursor-pointer"
          onClick={() => router.push("/work")}
        >
          <motion.div
            variants={contentVariants}
            className="relative hidden lg:flex group-hover:text-accent"
          >
            <Icon isHideLight={true}>
              <div className="absolute opacity-0 group-hover:opacity-85 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 h-7 bg-accent rounded-full blur-2xl transition-all ease-in-out duration-1000" />
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
          <div className="flex flex-col gap-1">
            <motion.h1
              variants={contentVariants}
              className="font-display text-xl leading-snug text-secondary font-extrabold"
            >
              Work
            </motion.h1>
            <motion.p
              variants={contentVariants}
              className="text-sm leading-relaxed tracking-normal font-semibold"
            >
              Take a look at my professional contributions
            </motion.p>
          </div>
        </div>

        <motion.div variants={contentVariants}>
          <Button
            suffix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 -translate-x-px group-hover:translate-x-0 mb-[.18rem] transition-all ease-in-out duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            onClick={() => router.push("/work")}
          />
        </motion.div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        {workList?.map((work, index) => {
          if (work?.isFeatured) {
            return (
              <motion.div variants={contentVariants} key={index}>
                <ImageCard data={work} clickHandler={() => selectWork(work)} />
              </motion.div>
            );
          }
        })}
      </div>
    </motion.section>
  );
};

export default WorkSection;
