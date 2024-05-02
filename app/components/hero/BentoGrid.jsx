"use client";

import React from "react";
import profilePic from "@/public/other/profile.jpeg";
import calculateYearCount from "@/app/utils/expCalculator";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { downloadPDF } from "@/app/utils/downloadPDF";
import Link from "next/link";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0,
    },
  },
};

const BentoGrid = () => {
  const router = useRouter();

  const boxStyle =
    "bg-base-100 w-full h-full flex justify-center items-center text-center overflow-clip";

  return (
    <div className="w-full lg:w-10/12 h-full grid gap-3">
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
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.2 },
            },
          }}
          className={`${boxStyle} group rounded-[35px] cursor-pointer bg-transparent overflow-visible`}
          onClick={() => router.push("/about")}
        >
          <img
            className="w-[95px] h-[95px] lg:w-[120px] lg:h-[120px] rounded-full object-cover group-hover:scale-105 transition-all ease-in-out duration-1000"
            src={profilePic.src}
            alt="profile-pic"
          />
        </motion.div>
        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.3 },
            },
          }}
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
        <Link
          href="./doc/resume.pdf"
          target="_blank"
          alt="my-cv"
          rel="noopener noreferrer"
        >
          <motion.div
            variants={{
              ...contentVariants,
              visible: {
                ...contentVariants.visible,
                transition: {
                  ...contentVariants.visible.transition,
                  delay: 0.4,
                },
              },
            }}
            className={`${boxStyle} rounded-br-[35px] rounded-t-[35px] cursor-pointer hover:text-secondary hover:font-black transition-all ease-in-out duration-500`}
            // onClick={() =>
            //   downloadPDF("/public/", "Resume - Muhammad Azlaan Zubair.pdf")
            // }
          >
            <div className="flex items-center justify-center">
              <span className="text-xs font-bold text-center uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 mb-1 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
                Resume
              </span>
            </div>
          </motion.div>
        </Link>
        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: {
                ...contentVariants.visible.transition,
                delay: 0.1,
              },
            },
          }}
          className={`${boxStyle} rounded-[35px] cursor-pointer hover:text-secondary hover:font-black transition-all ease-in-out duration-500`}
          onClick={() => router.push("/about")}
        >
          <div className="flex items-center justify-center">
            <span className="text-xs font-bold text-center uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 mx-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                  clipRule="evenodd"
                />
              </svg>
              Read Me
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0 },
            },
          }}
          className={`${boxStyle} group rounded-b-[35px] rounded-tl-[35px] cursor-pointer`}
          onClick={() =>
            window.open(
              "https://calendly.com/mdazlaanzubair/virtual-interaction/",
              "_blank"
            )
          }
        >
          <div className="bento-grid-container h-[120px] flex items-center justify-center">
            <h1 className="text-[150%] lg:text-[200%] font-black leading-none group-hover:scale-105 transition-all ease-in-out duration-500">
              Hire <br /> me.
            </h1>
          </div>
        </motion.div>
        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.5 },
            },
          }}
          className={`${boxStyle} row-span-2 rounded-r-[45px] cursor-pointer hover:text-secondary transition-all ease-in-out duration-500`}
          onClick={() => router.push("/projects")}
        >
          <span className="text-lg font-semibold [writing-mode:vertical-lr] rotate-180 uppercase">
            Side Projects
          </span>
        </motion.div>
        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.6 },
            },
          }}
          className={`${boxStyle} col-span-2 rounded-t-[40px] cursor-pointer rounded-l-[40px] font-semibold hover:text-secondary hover:font-bold transition-all ease-in-out duration-500`}
          onClick={() => router.push("/work")}
        >
          <span className="flex items-center justify-center h-[100px] uppercase">
            Case Studies
          </span>
        </motion.div>
        <motion.div
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.7 },
            },
          }}
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
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.8 },
            },
          }}
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
          variants={{
            ...contentVariants,
            visible: {
              ...contentVariants.visible,
              transition: { ...contentVariants.visible.transition, delay: 0.9 },
            },
          }}
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
