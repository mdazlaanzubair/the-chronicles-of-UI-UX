"use client";

import React from "react";
import ButtonLink from "../generic/ButtonLink";
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

// SOCIAL NAVIGATION LIST
const socialNavList = [
  // {
  //   title: "Instagram",
  //   url: "https://www.instagram.com/mdazlaanzubair/",
  //   icon: () => (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       strokeWidth="1"
  //       stroke="currentColor"
  //       fill="none"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
  //       <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  //       <path d="M16.5 7.5l0 .01" />
  //     </svg>
  //   ),
  // },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mdazlaanzubair/",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>
    ),
  },
  {
    title: "Github",
    url: "https://github.com/mdazlaanzubair",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    ),
  },
  {
    title: "Twitter",
    url: "https://twitter.com/mdazlaanzubair",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    ),
  },
  {
    title: "Chess.com",
    url: "https://www.chess.com/member/mdazlaanzubair",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
        <path d="M8.5 16a3.5 3.5 0 1 1 3.163 -5h.674a3.5 3.5 0 1 1 3.163 5z" />
        <path d="M9 6h6" />
        <path d="M12 3v8" />
      </svg>
    ),
  },
];

const SocialNavigation = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-[9px] font-semibold text-secondary mx-3 my-4">
        I&apos;M SOCIAL
      </h2>
      <motion.div
        variants={contentContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex flex-wrap items-center gap-3"
      >
        {socialNavList?.map((item, index) => (
          <motion.div variants={contentVariants} key={index}>
            <ButtonLink
              link={item?.url}
              label={item?.title}
              target="_blank"
              icon={<span className="w-5 h-5">{item?.icon()}</span>}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SocialNavigation;
