"use client";

import React, { useContext } from "react";
import SpotlightLink from "./SpotlightLink";
import Link from "next/link";
import { navList } from "./navigation-list";
import SocialNavigation from "./SocialNavigation";
import { motion } from "framer-motion";
import { GeneralContext } from "@/app/context/GeneralContext";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const activeSection = usePathname();
  const { toggleMenu, isMenuOpen } = useContext(GeneralContext);

  return (
    <div
      className={`fixed top-14 bottom-14 left-0 flex flex-col items-center justify-between gap-3 z-50`}
    >
      <div
        className={`flex translate-x-2 flex-col flex-shrink p-3 rounded-lg ${
          isMenuOpen && activeSection !== "/"
            ? "translate-x-2 opacity-100"
            : "-translate-x-full -left-full opacity-0"
        } transition-all ease-in-out duration-300`}
      >
        <button
          onClick={() => router.back()}
          className="relative  p-3 bg-base-100 text-primary rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex flex-col flex-grow p-3 items-center justify-center my-5 gap-3 rounded-lg ${
          isMenuOpen
            ? "translate-x-2 opacity-100"
            : "-translate-x-full -left-full opacity-0"
        } bg-base-300/80 border border-primary/20 transition-all ease-in-out duration-300`}
      >
        {navList?.map((nav, index) => (
          <Link
            href={nav?.url}
            className="relative group flex items-center p-3 bg-base-100 text-primary hover:text-secondary rounded-xl transition-all ease-in-out duration-300"
            title={nav?.title}
          >
            <div className="w-5 h-5">{nav?.icon()}</div>
          </Link>
        ))}
        {/* <Link
          href="/"
          className="relative group flex items-center p-3 bg-base-100 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </Link> */}
      </div>
      <div className="flex translate-x-2 flex-col flex-shrink p-3 rounded-lg">
        <button
          onClick={toggleMenu}
          className="relative w-16 h-16 p-3 bg-base-100 text-primary rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`absolute inline-block w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
            } transition-all ease-in-out duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`absolute inline-block w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
            } transition-all ease-in-out duration-500`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* <div className="flex flex-col justify-between w-full h-full pt-10">
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
      </div> */}
    </div>
  );
};

export default SideBar;
