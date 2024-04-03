"use client";

import React, { useEffect, useState } from "react";
import SpotlightLink from "./SpotlightLink";
import Link from "next/link";
import { navList } from "./navigation-list";

const SideBar = () => {
  return (
    <div className="hidden relative w-2/12 lg:flex flex-col items-start h-full max-h-full p-3 rounded-xl">
      <Link href="/about" className="nav-link group gap-4 hover:bg-primary/10">
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
      <div className="flex flex-col w-full my-10">
        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-[9px] font-semibold text-secondary px-3 mb-2">
            NAVIGATION
          </h2>
          {navList?.map((nav, index) => (
            <SpotlightLink
              key={index}
              href={nav?.url}
              icon={nav?.icon()}
              title={nav?.title}
            />
          ))}
        </div>

        <div className="flex-grow my-20" />

        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-xs font-semibold text-secondary mx-3 my-4">
            I&apos;M SOCIAL
          </h2>
          {["Home", "Work"]?.map((item, index) => (
            <div
              key={index}
              className="group nav-list cursor-pointer flex items-center rounded-lg hover:bg-primary/10 transition-all ease-in-out duration-500"
            >
              <span className="mx-3 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
              </span>
              <p className="font-medium text-primary text-base group-hover:text-secondary transition-all ease-in-out duration-500">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
