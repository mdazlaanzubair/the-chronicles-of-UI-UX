"use client";

import { GeneralContext } from "@/app/context/GeneralContext";
import React, { useContext } from "react";

const MobileNavToggler = () => {
  const { toggleMenu, isMenuOpen } = useContext(GeneralContext);

  return (
    <button
      onClick={toggleMenu}
      className="fixed bottom-5 left-5 w-12 h-12 text-base-300 bg-accent rounded-xl z-40"
    >
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`absolute inline-block w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
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
          className={`absolute inline-block w-7 h-7 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
          } transition-all ease-in-out duration-500`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </button>
  );
};

export default MobileNavToggler;
