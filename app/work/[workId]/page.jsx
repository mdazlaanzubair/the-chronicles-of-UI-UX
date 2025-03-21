"use client";

import Button from "@/app/components/generic/Button";
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
      staggerChildren: 0.1,
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
  const { workData, selectWork } = useContext(GeneralContext);
  const router = useRouter();

  const [activeSection, setActiveSection] = useState("Overview");

  const [isContentNavOpen, setIsContentNavOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // FUNCTION TO TOGGLE CONTENT NAVBAR
  const toggleContentNav = () => setIsContentNavOpen(!isContentNavOpen);

  useEffect(() => {
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

    // SELECTING THE CASE STUDY BY ID
    selectWork(params?.workId);

    // SETTING SPOTLIGHT STATE VISIBLE
    // TO AVOID ANIMATION ON EVERY VIEW
    setIsVisible(true);

    return () => observer.disconnect();
  }, [params]);

  if (workData?.id === 0 || workData?.isLocked === true)
    router.push(`/not-found`);
  else {
    return (
      <motion.div
        id="Back to Top"
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

        <motion.div
          variants={contentVariants}
          className="fixed hidden lg:flex top-5 right-5 z-50"
        >
          <Button
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
                        {workData?.details?.overview?.desc &&
                          Object.values(workData?.details?.overview?.desc)?.map(
                            (para, index) => (
                              <motion.p
                                key={index}
                                variants={contentVariants}
                                className="work-para-style"
                              >
                                {para}
                              </motion.p>
                            )
                          )}
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
                        What&apos;s{" "}
                        <a
                          href={workData?.url}
                          target="_blank"
                          className="text-accent"
                        >
                          {workData?.title}
                        </a>
                      </motion.h1>
                    </div>
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                      <div>
                        {workData?.details?.projectDesc &&
                          Object.values(workData?.details?.projectDesc)?.map(
                            (para, index) => (
                              <motion.p
                                key={index}
                                variants={contentVariants}
                                className="work-para-style"
                              >
                                {para}
                              </motion.p>
                            )
                          )}
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
                        Problem Statement
                      </motion.h1>
                    </div>
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                      <div>
                        {workData?.details?.problemStatement &&
                          Object.values(
                            workData?.details?.problemStatement
                          )?.map((para, index) => (
                            <motion.p
                              key={index}
                              variants={contentVariants}
                              className="work-para-style"
                            >
                              {para}
                            </motion.p>
                          ))}
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
                        Solution
                      </motion.h1>
                    </div>
                    <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.solution?.para}
                      </motion.p>
                      <ul className="list-decimal pl-5">
                        {workData?.details?.solution &&
                          Object.values(workData?.details?.solution?.list)?.map(
                            (listItem, index) => (
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
                            )
                          )}
                      </ul>
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
                      <motion.p
                        variants={contentVariants}
                        className="work-para-style"
                      >
                        {workData?.details?.impact?.para}
                      </motion.p>
                      <ul className="list-decimal pl-5">
                        {workData?.details?.impact &&
                          Object.values(workData?.details?.impact?.list)?.map(
                            (listItem, index) => (
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
                            )
                          )}
                      </ul>
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
                        {workData?.details?.closingNotes &&
                          Object.values(workData?.details?.closingNotes)?.map(
                            (para, index) => (
                              <motion.p
                                key={index}
                                variants={contentVariants}
                                className="work-para-style"
                              >
                                {para}
                              </motion.p>
                            )
                          )}
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
  }
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
