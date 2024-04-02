import React from "react";
import Marquee from "react-fast-marquee";

const IconSlider = ({ icons }) => {
  return (
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
          className="group w-16 h-16 bg-primary/5 p-3 mx-5 rounded-lg cursor-pointer"
          title={logo?.title}
        >
          <img
            className="saturate-200 brightness-100 w-full h-full grayscale group-hover:grayscale-0"
            src={logo?.src}
            alt={logo?.title + "-logo"}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default IconSlider;
