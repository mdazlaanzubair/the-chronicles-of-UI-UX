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
        <img
          key={index}
          className="w-10 inline-flex mx-5 saturate-200 brightness-50 hover:brightness-100"
          src={logo?.src}
          alt={logo?.title + "-logo"}
          title={logo?.title}
        />
      ))}
    </Marquee>
  );
};

export default IconSlider;
