"use client";

import React, { useContext } from "react";
import SpotlightLink from "./SpotlightLink";
import { GeneralContext } from "@/app/context/GeneralContext";
import { navList } from "./navigation-list";
import SocialNavigation from "./SocialNavigation";

const MobileNavBar = () => {
  const { isMenuOpen } = useContext(GeneralContext);

  return (
    <div
      className={`relative ${
        isMenuOpen
          ? "w-full h-full flex visible opacity-100"
          : "w-0 h-0 lg:hidden lg:invisible lg:opacity-0"
      } flex-col items-start p-3 rounded-xl overflow-hidden transition-all ease-in-out duration-300`}
    >
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col gap-1 w-full mb-10">
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
        <SocialNavigation />
      </div>
    </div>
  );
};

export default MobileNavBar;
