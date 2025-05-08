import React from "react";
import Marquee from "react-fast-marquee";
import { toolKit } from "../utils/iconExporter";
import bg_img from "../assets/backgrounds/abstract-bg1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

const ProjectGridSlider = (props: Props) => {
  return (
    <section
      id="icon-section"
      className="flex flex-col w-full bg-base-200 rounded-2xl"
    >
      <Marquee autoFill pauseOnHover direction="right" speed={25}>
        {toolKit?.map((logo, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center bg-base-100 w-[189px] h-[130px] mx-[6px] rounded-xl cursor-pointer gap-3 overflow-hidden"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover object-center rounded-xl transition-all ease-in-out duration-300 z-0"
              src={bg_img}
              alt={logo?.title + "-logo"}
              title={logo?.title}
            />

            {/* Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-xl backdrop-blur-3xl bg-white opacity-0 group-hover:opacity-50 transition-all ease-in-out duration-300"></div>

            {/* Button */}
            <button className="opacity-0 group-hover:opacity-100 absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit btn btn-xs btn-neutral font-bold">
              View
              <FaArrowRightLong className="text-[1px] w-0 opacity-0 -translate-x-full group-hover:text-xs group-hover:w-fit group-hover:opacity-100 group-hover:translate-x-0 transition-all ease-in-out duration-300" />
            </button>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ProjectGridSlider;
