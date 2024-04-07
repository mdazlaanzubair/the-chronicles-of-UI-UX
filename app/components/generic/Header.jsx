"use client";
import { GeneralContext } from "@/app/context/GeneralContext";
import React, { useContext } from "react";
import Button from "./Button";
import Link from "next/link";
import MobileNavBar from "../navigation/MobileNavBar";

const Header = () => {
  const { toggleMenu, isMenuOpen } = useContext(GeneralContext);

  return (
    <div className="flex lg:hidden flex-col w-full transition-all ease-in-out duration-300">
      <div className="header-section">
        <Link
          href="/"
          className="nav-link w-auto text-start group gap-4 hover:bg-primary/10"
        >
          <img
            className="w-10 rounded-full"
            src="https://framerusercontent.com/images/t4kKb01sNaira2a5mAbB9b1PBIw.jpg"
          />
          <div className="profile">
            <h1 className="font-semibold text-secondary text-sm leading-relaxed">
              Azlaan
            </h1>
            <p className="font-medium text-primary group-hover:text-accent text-xs whitespace-nowrap">
              Web Engineer
            </p>
          </div>
        </Link>

        <Button
          prefix={
            <div className="flex flex-col overflow-clip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`mb-[.12rem] ${
                  isMenuOpen
                    ? "w-0 h-0 opacity-0 rotate-180"
                    : "w-6 h-6 opacity-100 rotate-0"
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
                className={`mb-[.15rem] ${
                  isMenuOpen
                    ? "w-6 h-6 opacity-100 rotate-0"
                    : "w-0 h-0 opacity-0 -rotate-180"
                } transition-all ease-in-out duration-500`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          }
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && <MobileNavBar />}
    </div>
  );
};

export default Header;
