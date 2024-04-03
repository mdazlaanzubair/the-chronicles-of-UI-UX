"use client";

import React, { useContext } from "react";
import SpotlightLink from "./SpotlightLink";
import { GeneralContext } from "@/app/context/GeneralContext";
import { navList } from "./navigation-list";

const MobileNavBar = () => {
  const { isMenuOpen } = useContext(GeneralContext);

  return (
    <div
      className={`lg:hidden w-full h-auto rounded-r-lg bg-opacity-95 z-50 flex flex-col items-start px-3 transition-all ease-in-out duration-700`}
    >
      <div
        className={`${
          isMenuOpen
            ? "flex flex-col w-full opacity-100 h-autogap-10 bg-base-300"
            : "opacity-0 hidden w-0 h-0"
        } transition-all ease-in-out duration-300`}
      >
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

        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-[9px] font-semibold text-secondary px-3 mb-2">
            I&apos;m Social
          </h2>
          <div className="flex flex-row gap-1 w-full">
            {navList?.map((nav, index) => (
              <SpotlightLink key={index} href={nav?.url} icon={nav?.icon()} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
