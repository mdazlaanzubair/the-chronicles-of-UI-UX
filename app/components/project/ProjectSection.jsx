"use client";

import React from "react";
import { projectList } from "./project-list";
import Icon from "../generic/Icon";
import { useRouter } from "next/navigation";
import Button from "../generic/Button";
import ImageCard from "../generic/ImageCard";

const ProjectSection = () => {
  const router = useRouter();
  return (
    <section
      id="project-section"
      className="relative w-full flex flex-col items-center justify-between gap-5 py-10 lg:py-16"
    >
      <div className="flex w-full items-center justify-between gap-5 mb-5">
        <div className="flex items-center gap-5">
          <Icon
            className="hidden lg:flex"
            size="w-10 h-10"
            clickHandler={() => router.push("/projects")}
          >
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
          <div
            className="flex flex-col gap-1 cursor-pointer"
            onClick={() => router.push("/projects")}
          >
            <h1 className="font-cabin text-xl leading-snug text-secondary font-extrabold">
              Personal Projects
            </h1>
            <p className="text-sm leading-relaxed tracking-normal font-semibold">
              Things I built while learning, exploring, testing and trying the
              web technologies.
            </p>
          </div>
        </div>

        <Button
          className="hidden lg:flex"
          label="Explore more"
          icon={
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
          onClick={() => router.push("/projects")}
        />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectList?.map((project, index) => {
          if (project?.isFeatured) {
            return <ImageCard key={index} data={project} />;
          }
        })}
      </div>

      <div className="flex lg:hidden w-full items-center justify-center gap-5 mt-5">
        <Button label="Explore more" onClick={() => router.push("/projects")} />
      </div>
    </section>
  );
};

export default ProjectSection;
