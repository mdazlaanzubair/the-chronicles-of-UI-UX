"use client";
import React, { useState } from "react";

import Marquee from "react-fast-marquee";

const IconSlider = ({ icons }) => {
  const [tool, setTool] = useState("toolkit");

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-base text-center leading-relaxed tracking-wide font-semibold mb-5">
        My
        <span className="mx-1 lowercase font-medium text-xs px-3 py-[.27rem] text-accent rounded-lg border bg-base-300 border-accent whitespace-nowrap">
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
            className="group w-16 h-16 bg-base-300 border-2 border-primary/15 p-3 mx-5 rounded-lg cursor-pointer overflow-auto"
            onMouseEnter={() => setTool(logo?.title)}
            onMouseLeave={() => setTool("toolkit")}
          >
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
