"use client";

import Button from "@/app/components/generic/Button";
import Figure from "@/app/components/generic/Figure";
import { workList } from "@/app/components/work/work-list";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

  // FUNCTION TO TOGGLE CONTENT NAVBAR
  const toggleContentNav = () => setIsContentNavOpen(!isContentNavOpen);

  // FUNCTION TO GET WORK DATA BY ID
  const getWorkById = (id) => {
    const getWorkById = workList?.filter((work) => work?.id == id);
    setWorkData(getWorkById[0]);
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

  useEffect(() => console.log("activeSection", activeSection), [activeSection]);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between gap-5">
      <div
        className="absolute flex -top-[300%] left-1/2 -translate-x-1/2 bottom-0 right-0 w-2/4 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), transparent, transparent)`,
        }}
      />

      <div
        id="Back to Top"
        className="w-full gap-3 z-10 flex items-center justify-between p-3"
      >
        <div className="flex flex-shrink">
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
        </div>
        <div className="flex flex-grow"></div>
        <div className="flex flex-shrink">
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
        </div>
      </div>

      <div className="flex w-full h-full justify-between items-start gap-3 z-10 p-3 lg:px-16 overflow-auto">
        <div className="w-full h-full flex flex-col overflow-scroll">
          <h1 className="font-display text-3xl lg:text-4xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3">
            {workData?.title}
          </h1>
          <p className="text-center text-sm w-full font-bold mb-10">
            {workData?.subTitle}
          </p>
          <div className="container mx-auto">
            <Figure
              className="w-3/4 h-3/2 mx-auto"
              size="w-full h-full"
              src={workData?.details?.coverImgSrc}
              caption="The Case Study"
              tag="TaskVare"
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
                      <h1 className="work-heading-style">My Role</h1>
                      <p className="work-para-style">
                        {workData?.details?.overview?.myRole}
                      </p>
                    </div>
                    <div>
                      <h1 className="work-heading-style">The Team</h1>
                      <p className="work-para-style">
                        {workData?.details?.overview?.team}
                      </p>
                    </div>
                    <div>
                      <h1 className="work-heading-style">Timeline</h1>
                      <p className="work-para-style">
                        {workData?.details?.overview?.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <h1 className="work-heading-style">Overview</h1>
                      <p className="work-para-style">
                        {workData?.details?.overview?.projectDesc?.para1}
                      </p>
                      <p className="work-para-style">
                        {workData?.details?.overview?.projectDesc?.para2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Problem"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <h1 className="text-secondary mb-1 text-[16px] font-semibold">
                      What&apos;s the problem
                    </h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <p className="work-para-style">
                        {workData?.details?.problemStatement?.para1}
                      </p>
                      <p className="work-para-style">
                        {workData?.details?.problemStatement?.para2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Solution"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <h1 className="text-secondary mb-1 text-[16px] font-semibold">
                      Resolution of that problem
                    </h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <p className="work-para-style">
                        {workData?.details?.solution?.para1}
                      </p>
                      <p className="work-para-style">
                        {workData?.details?.solution?.para2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Impact"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <h1 className="text-secondary mb-1 text-[16px] font-semibold">
                      Impact of solution
                    </h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <p className="work-para-style">
                        {workData?.details?.impact?.para1}
                      </p>
                      <p className="work-para-style">
                        {workData?.details?.impact?.para2}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-2/4 mx-auto my-5 lg:my-10 h-[.15rem] bg-primary/15" />
                <div
                  id="Final Thoughts"
                  className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-10"
                >
                  <div className="col-span-1 flex flex-col gap-3">
                    <h1 className="text-secondary mb-1 text-[16px] font-semibold">
                      Final Thoughts
                    </h1>
                  </div>
                  <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <p className="work-para-style">
                        {workData?.details?.closingNotes?.para1}
                      </p>
                      <p className="work-para-style">
                        {workData?.details?.closingNotes?.para2}
                      </p>
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
    </div>
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
                  activeNav == section ? "text-secondary" : "text-primary"
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
