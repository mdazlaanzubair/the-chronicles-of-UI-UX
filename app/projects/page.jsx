"use client";

import React from "react";
import Icon from "../components/generic/Icon";
import ImageCard from "../components/generic/ImageCard";
import { projectList } from "../components/project/project-list";
import { useRouter } from "next/navigation";

const ProjectsPage = () => {
  const router = useRouter();
  return (
    <div className="relative w-full flex flex-col items-center justify-between gap-5 py-6 lg:py-16">
      <div
        className="absolute flex -top-[300%] left-1/2 -translate-x-1/2 bottom-0 right-0 w-2/4 blur-3xl"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), transparent, transparent)`,
        }}
      />

      <div className="flex flex-col items-center mt-5 z-10 px-6 lg:px-32">
        <div className="relative">
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-xl blur-3xl opacity-75`}
            style={{
              background: `radial-gradient(circle at center, rgb(255 255 255 / 1) 0%, rgb(255 255 255 / 0.5) 100%)`,
            }}
          />
          <Icon size="w-20 h-20">
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
        </div>

        <h1 className="font-display text-3xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3">
          Personal Projects
        </h1>
        <p className="text-sm leading-relaxed tracking-normal font-semibold text-center">
          Things I built while learning, exploring, testing and trying the web
          technologies
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-6 lg:px-32">
        {projectList?.map((project, index) => (
          <ImageCard
            key={index}
            data={project}
            clickHandler={() =>
              project?.isLocked ? null : router.push(`/projects/${project?.id}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
