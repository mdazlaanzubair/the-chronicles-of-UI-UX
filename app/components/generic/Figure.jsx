import React from "react";
import placeholderBG from "@/public/backgrounds/placeholder-bg.jpg";
import Tilter from "./Tilter";

const Figure = ({
  src = placeholderBG.src,
  className,
  size = "w-[250px] h-[350px]",
  caption = "Profile Picture",
  tag = "Img",
}) => {
  return (
    <div className={`${className}`}>
      <Tilter>
        <div className="border border-primary/10 rounded-2xl p-[0.35rem]">
          <div
            className={`${size} border border-primary/10 rounded-xl overflow-hidden`}
          >
            <img
              className="w-full h-full object-center object-cover hover:scale-105 rounded-xl transition-all ease-in-out duration-500"
              src={src}
              alt="profile-pic"
            />
          </div>
        </div>
      </Tilter>
      <p className="flex items-center justify-end text-[10px] text-primary my-3 gap-3 font-bold uppercase mx-3">
        <span className="mt-px mb-px capitalize">{caption}</span>
        <span className="px-2 py-px rounded border-2 bg-base-300 border-primary/30">
          {tag}
        </span>
      </p>
    </div>
  );
};

export default Figure;
