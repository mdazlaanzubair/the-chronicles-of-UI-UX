"use client";

import React from "react";
import SpotlightLink from "./SpotlightLink";
import Link from "next/link";
import { navList } from "./navigation-list";
import SocialNavigation from "./SocialNavigation";
import { motion } from "framer-motion";

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.23,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

const SideBar = () => {
  return (
    <div className="hidden relative w-2/12 lg:flex flex-col items-start h-full max-h-full p-3 rounded-xl">
      <Link href="/" className="nav-link group gap-4 hover:bg-primary/10">
        <img
          className="w-10 rounded-full"
          src="https://framerusercontent.com/images/t4kKb01sNaira2a5mAbB9b1PBIw.jpg"
        />
        <div className="profile">
          <h1 className="font-semibold text-secondary text-sm leading-relaxed">
            Azlaan
          </h1>
          <p className="font-medium text-primary group-hover:text-accent text-xs">
            Web Engineer
          </p>
        </div>
      </Link>
      <div className="flex flex-col justify-between w-full h-full pt-10">
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="flex flex-col gap-1 w-full mb-20"
        >
          <h2 className="text-[9px] font-semibold text-secondary px-3 mb-2">
            NAVIGATION
          </h2>
          {navList?.map((nav, index) => (
            <motion.div variants={contentVariants} key={index}>
              <SpotlightLink
                href={nav?.url}
                icon={nav?.icon()}
                title={nav?.title}
              />
            </motion.div>
          ))}
        </motion.div>
        <SocialNavigation />
      </div>
    </div>
  );
};

export default SideBar;
