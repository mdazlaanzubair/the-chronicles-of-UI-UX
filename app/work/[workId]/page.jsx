"use client";

import Button from "@/app/components/generic/Button";
import Figure from "@/app/components/generic/Figure";
import { workList } from "@/app/components/work/work-list";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

const contentSections = [
  "Overview",
  "Problem",
  "Solution",
  "Impact",
  "Final Thoughts",
  "Back to Top",
];

const WorkPage = ({ params }) => {
  const [activeSection, setActiveSection] = useState("Overview");

  const [workData, setWorkData] = useState(null);
  const [isContentNavOpen, setIsContentNavOpen] = useState(true);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // FUNCTION TO TOGGLE CONTENT NAVBAR
  const toggleContentNav = () => setIsContentNavOpen(!isContentNavOpen);

  // FUNCTION TO GET WORK DATA BY ID
  const getWorkById = (id) => {
    const dataArray = workList?.filter((work) => work?.id == id);
    setWorkData(dataArray[0]);
  };

  useEffect(() => {
    // FETCHING WORK DATA
    getWorkById(params?.workId);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    ); // Adjust threshold value as needed

    contentSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [params]);

  useEffect(() => setIsVisible(true), []);

  return (
    <motion.div
      variants={contentContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="relative w-full h-full flex flex-col items-center justify-between gap-3"
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
        <motion.div variants={contentVariants} className="flex flex-shrink">
          <Button
            className="hidden lg:flex"
            onClick={toggleContentNav}
            prefix={
              isContentNavOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mb-px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mb-px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              )
            }
          />
        </motion.div>
      </div>

      <div className="flex w-full h-full justify-between items-start gap-3 z-10 p-3 lg:px-16 overflow-auto">
        <div className="w-full h-full flex flex-col overflow-scroll">
          <motion.h1
            variants={contentVariants}
            className="font-display text-3xl lg:text-4xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3"
          >
            {workData?.title}
          </motion.h1>
          <motion.p
            variants={contentVariants}
            className="text-center text-sm w-full font-bold mb-10"
          >
            {workData?.subTitle}
          </motion.p>
          <div className="container mx-auto">
            <Figure
              className="w-3/4 h-3/2 mx-auto"
              size="w-full h-full"
              src={workData?.details?.coverImgSrc}
              caption="The Case Study"
              tag="IMG"
            />
          </div>
          <div className="container mt-10 mx-auto">
            <div className="flex items-center">
              <div className="w-full h-full flex flex-col p-6 overflow-scroll">
                <div
                  id="Overview"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="work-heading-style"
                      >
                        My Role
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.overview?.myRole}
                      </motion.p>
                    </div>
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="work-heading-style"
                      >
                        The Team
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.overview?.team}
                      </motion.p>
                    </div>
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="work-heading-style"
                      >
                        Timeline
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.overview?.timeline}
                      </motion.p>
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <motion.h1
                        variants={contentVariants}
                        className="work-heading-style"
                      >
                        Overview
                      </motion.h1>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.overview?.projectDesc?.para1}
                      </motion.p>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.overview?.projectDesc?.para2}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Problem"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <motion.h1
                      variants={contentVariants}
                      className="text-secondary mb-1 text-[16px] font-semibold"
                    >
                      What&apos;s the problem
                    </motion.h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.problemStatement?.para1}
                      </motion.p>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.problemStatement?.para2}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Solution"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <motion.h1
                      variants={contentVariants}
                      className="text-secondary mb-1 text-[16px] font-semibold"
                    >
                      Resolution of that problem
                    </motion.h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.solution?.para1}
                      </motion.p>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.solution?.para2}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Impact"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <motion.h1
                      variants={contentVariants}
                      className="text-secondary mb-1 text-[16px] font-semibold"
                    >
                      Impact of solution
                    </motion.h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.impact?.para1}
                      </motion.p>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.impact?.para2}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Final Thoughts"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <motion.h1
                      variants={contentVariants}
                      className="text-secondary mb-1 text-[16px] font-semibold"
                    >
                      Final Thoughts
                    </motion.h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.closingNotes?.para1}
                      </motion.p>
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.closingNotes?.para2}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContentNavigation
          isShow={isContentNavOpen}
          activeNav={activeSection}
        />
      </div>
    </motion.div>
  );
};

export default WorkPage;

const ContentNavigation = ({ isShow, activeNav }) => {
  return (
    <div
      className={`relative ${
        isShow
          ? "hidden lg:flex w-[15%] h-full p-2 opacity-100"
          : "w-0 h-full p-2 opacity-0"
      } transition-all ease-in-out duration-300`}
    >
      {isShow && (
        <div className="hidden lg:fixed lg:flex w-full flex-col gap-1 mb-20">
          <h2 className="text-[11px] font-semibold text-secondary uppercase">
            Contents
          </h2>
          <div className="flex flex-col">
            {contentSections?.map((section, index) => (
              <a
                key={index}
                href={"#" + section}
                className={`text-[11px] ${
                  activeNav == section ? "text-accent" : "text-primary"
                } hover:text-secondary py-2 transition-all ease-in-out duration-300`}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
