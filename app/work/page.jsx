import React from "react";
import Icon from "../components/generic/Icon";
import ImageCard from "../components/generic/ImageCard";
import { workList } from "../components/work/work-list";

const WorkPage = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-between gap-5 py-6 lg:py-16">
      <div
        className="absolute hidden lg:flex -top-[230%] left-[0] bottom-0 right-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      <div
        className="absolute flex lg:hidden -top-[230%] left-[0] bottom-0 right-0"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%)`,
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
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              />
            </svg>
          </Icon>
        </div>

        <h1 className="font-cabin text-3xl leading-snug text-secondary text-center font-extrabold mt-5 mb-3">
          Executive Efforts
        </h1>
        <p className="text-sm leading-relaxed tracking-normal font-semibold text-center">
          Take a look at my professional contributions.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 px-6 lg:px-32">
        {workList?.map((work, index) => (
          <ImageCard key={index} data={work} />
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
