"use client";

import Button from "@/app/components/generic/Button";
import Figure from "@/app/components/generic/Figure";
import { projectList } from "@/app/components/project/project-list";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectPage = ({ params }) => {
  const [projectData, setProjectData] = useState(null);
  const router = useRouter();

  // FUNCTION TO GET PROJECT DATA BY ID
  const getProjectById = (id) => {
    const dataArray = projectList?.filter((project) => project?.id == id);
    setProjectData(dataArray[0]);
  };

  // FETCHING PROJECT DATA
  useEffect(() => getProjectById(params?.projectId), [params]);

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
        <div className="flex flex-shrink"></div>
      </div>

      <div className="flex w-full h-full justify-between items-start gap-3 z-10 p-3 lg:px-16 overflow-auto">
        <div className="w-full h-full flex flex-col overflow-scroll">
          <h1 className="font-display text-3xl lg:text-4xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3">
            {projectData?.title}
          </h1>
          <p className="text-center text-sm w-full font-bold mb-10">
            {projectData?.subTitle}
          </p>
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
                    <h1 className="project-heading-style">My Role</h1>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.myRole}
                    </p>
                  </div>
                  <div>
                    <h1 className="project-heading-style">The Team</h1>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.team}
                    </p>
                  </div>
                  <div>
                    <h1 className="project-heading-style">tech Stack</h1>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.techUsed}
                    </p>
                  </div>
                  <div>
                    <h1 className="project-heading-style">Timeline</h1>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.timeline}
                    </p>
                  </div>
                </div>
                <div className="col-span-1 lg:col-span-3 flex flex-col gap-3">
                  <div>
                    <h1 className="project-heading-style">Overview</h1>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.projectDesc?.para1}
                    </p>
                    <p className="project-para-style">
                      {projectData?.details?.overview?.projectDesc?.para2}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
