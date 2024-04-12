"use client";

import React from "react";
import profilePic from "@/public/other/profile.jpeg";
import calculateYearCount from "@/app/utils/expCalculator";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const BentoGrid = () => {
  const router = useRouter();

  const boxStyle =
    "bg-base-100 w-full h-full flex justify-center items-center text-center overflow-clip";

  return (
    <div className="w-full lg:w-2/3 h-full grid gap-3">
      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="grid grid-cols-3 gap-3 auto-rows-[95px] lg:auto-rows-[120px]"
      >
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} row-span-2 rounded-bl-[35px] rounded-t-[65px]`}
        >
          <div className="flex flex-col w-full h-full">
            <button
              onClick={() => router.push("/about")}
              type="button"
              className="bg-secondary/80 text-base-100 w-full h-1/2 text-sm font-bold uppercase rounded-full cursor-pointer hover:bg-secondary hover:font-black transition-all ease-in-out duration-500"
            >
              About Me
            </button>
            <div
              className="group w-full h-1/2 flex items-center justify-center cursor-pointer hover:text-secondary hover:font-black transition-all ease-in-out duration-500"
              onClick={() => alert("Resume is not attached yet!!!")}
            >
              <a
                href="#"
                className="text-xs font-bold text-center uppercase -mt-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mb-2 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} rounded-t-[35px] rounded-l-[35px] cursor-pointer hover:text-secondary hover:font-bold transition-all ease-in-out duration-500`}
          onClick={() => router.push("/credentials")}
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[20px] lg:text-[30px] font-black">
              {calculateYearCount()}
            </span>
            <span className="text-xs font-semibold whitespace-pre-wrap">
              yr. hands-on
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} group rounded-t-[35px] rounded-r-[35px] cursor-pointer`}
          onClick={() => router.push("/about")}
        >
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-all ease-in-out duration-1000"
            src={profilePic.src}
            alt="profile-pic"
          />
        </motion.div>

        <motion.div
          variants={contentVariants}
          className={`${boxStyle} rounded-b-[35px] rounded-tl-[35px]`}
        >
          <div className="bento-grid-container h-[120px] flex items-center justify-center">
            <h1 className="text-[150%] lg:text-[200%] font-black">Web Dev.</h1>
          </div>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} row-span-2 rounded-r-[45px] cursor-pointer hover:text-secondary transition-all ease-in-out duration-500`}
          onClick={() => router.push("/projects")}
        >
          <span className="text-lg font-semibold [writing-mode:vertical-lr] rotate-180">
            Side Projects
          </span>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} col-span-2 rounded-t-[40px] cursor-pointer rounded-l-[40px] font-semibold hover:text-secondary hover:font-bold transition-all ease-in-out duration-500`}
          onClick={() => router.push("/work")}
        >
          <span className="flex items-center justify-center h-[100px]">
            Case Studies
          </span>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} rounded-b-[35px] rounded-l-[35px] cursor-pointer hover:text-secondary transition-all ease-in-out duration-500`}
          onClick={() =>
            window.open("https://www.linkedin.com/in/mdazlaanzubair/", "_blank")
          }
        >
          <svg
            viewBox="0 0 448 512"
            fill="currentColor"
            className="w-8 h-8 lg:w-10 lg:h-10"
          >
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} rounded-b-[35px] rounded-l-[35px] cursor-pointer hover:text-secondary transition-all ease-in-out duration-500`}
          onClick={() =>
            window.open("https://twitter.com/mdazlaanzubair", "_blank")
          }
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 lg:w-10 lg:h-10"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </motion.div>
        <motion.div
          variants={contentVariants}
          className={`${boxStyle} rounded-b-[35px] rounded-r-[35px] cursor-pointer hover:text-secondary transition-all ease-in-out duration-500`}
          onClick={() =>
            window.open("https://github.com/mdazlaanzubair", "_blank")
          }
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="w-8 h-8 lg:w-10 lg:h-10"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BentoGrid;
