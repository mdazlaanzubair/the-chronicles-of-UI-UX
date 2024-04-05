"use client";
import React, { useState } from "react";

import Marquee from "react-fast-marquee";

const IconSlider = ({ icons }) => {
  const [tool, setTool] = useState("toolkit");

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-sm leading-relaxed tracking-wide font-semibold mb-5">
        My
        <span
          className={`mx-1 lowercase font-medium text-xs px-3 py-[.27rem] ${
            tool === "toolkit"
              ? "text-primary border-primary/30"
              : "text-secondary border-sectext-secondary"
          } rounded border bg-base-300 whitespace-nowrap transition-all ease-in-out duration-300`}
        >
          {tool}
        </span>
        for web crafting
      </h2>
      <Marquee
        autoFill
        pauseOnHover
        direction="Left"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #fff, #fff, transparent)",
        }}
      >
        {icons.map((logo, index) => (
          <div
            key={index}
            className="group relative w-10 h-10 lg:w-16 lg:h-16 bg-base-300/30 border-[3px] border-primary/20 p-3 mx-5 rounded-lg cursor-pointer overflow-auto"
            onMouseEnter={() => setTool(logo?.title)}
            onMouseLeave={() => setTool("toolkit")}
          >
            <div
              className={`absolute left-0 right-0 top-0 bottom-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300`}
              style={{
                background: `radial-gradient(circle at 50% 50%, rgb(255 255 255 / 0.1) 20%, rgb(255 255 255 / 0.1) 20%, transparent)`,
              }}
            />
            <img
              className="saturate-200 object-fill brightness-100 w-full h-full grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all ease-in-out duration-300"
              src={logo?.src}
              alt={logo?.title + "-logo"}
              title={logo?.title}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default IconSlider;
