"use client";

import React from "react";
import placeholderBG from "@/public/backgrounds/placeholder-bg.jpg";
import Tilter from "./Tilter";
import { motion } from "framer-motion";

const figureVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const Figure = ({
  src = placeholderBG.src,
  className,
  size = "w-[250px] h-[350px]",
  caption = "Profile Picture",
  tag = "Imagine",
}) => {
  return (
    <div className={`group ${className}`}>
      <Tilter>
        <motion.div
          className="border border-primary/10 rounded-2xl p-[0.35rem]"
          variants={fadeVariants}
        >
          <div
            className={`${size} border border-primary/10 rounded-xl overflow-hidden`}
          >
            <motion.img
              variants={figureVariants}
              className="w-full h-full object-center object-cover hover:scale-105 rounded-xl transition-all ease-in-out duration-500"
              src={src}
              alt="profile-pic"
            />
          </div>
        </motion.div>
      </Tilter>
      <motion.p
        variants={fadeVariants}
        className="flex items-center justify-end text-[10px] text-primary my-3 gap-3 font-bold uppercase mx-3"
      >
        <span className="mt-px mb-px capitalize group-hover:text-accent transition-all ease-in-out duration-300">
          {caption}
        </span>
        <span className="px-2 py-px rounded border-2 bg-base-300 border-primary/30 group-hover:text-secondary transition-all ease-in-out duration-300">
          {tag}
        </span>
      </motion.p>
    </div>
  );
};

export default Figure;
