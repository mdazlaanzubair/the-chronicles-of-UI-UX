"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { navList } from "./navigation-list";
import { GeneralContext } from "@/app/context/GeneralContext";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const activeSection = usePathname();
  const { toggleMenu, isMenuOpen } = useContext(GeneralContext);

  return (
    <div
      className={`fixed top-14 bottom-14 left-0 flex flex-col items-center justify-center z-50`}
    >
      <div
        className={`flex items-center justify-center bg-base-300/80 flex-col p-3 rounded-lg ${
          isMenuOpen && activeSection != "/"
            ? "translate-x-2 opacity-100"
            : !isMenuOpen && activeSection != "/"
            ? `-translate-x-full -left-full opacity-0 lg:opacity-100 lg:translate-x-2 lg:left-0`
            : "-translate-x-full -left-full opacity-0"
        } transition-all ease-in-out duration-300`}
      >
        <button
          onClick={() => router.back()}
          className="relative group p-3 bg-base-100 text-primary rounded-lg hover:text-secondary transition-all ease-in-out duration-300"
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
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <p className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 group-hover:ml-3 z-50 px-5 py-[.6rem] rounded-lg bg-base-100 text-secondary whitespace-nowrap transition-all ease-in-out duration-500">
            Fall Back
          </p>
        </button>
      </div>
      <div
        className={`flex flex-col p-3 items-center justify-center my-5 gap-3 rounded-lg ${
          isMenuOpen
            ? "translate-x-2 opacity-100 flex"
            : "-translate-x-full -left-full opacity-0 lg:translate-x-2 lg:left-0 lg:opacity-100"
        } bg-base-300/80 transition-all ease-in-out duration-300`}
      >
        {navList?.map((nav, index) => (
          <Link
            key={index}
            href={nav?.url}
            className="relative group flex items-center p-3 bg-base-100 text-primary hover:text-secondary rounded-xl transition-all ease-in-out duration-300"
            title={nav?.title}
          >
            <div className="w-5 h-5">{nav?.icon()}</div>
            <p className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 group-hover:ml-3 z-50 px-5 py-[.6rem] rounded-lg bg-base-100 text-secondary whitespace-nowrap transition-all ease-in-out duration-500">
              {nav?.title}
            </p>
          </Link>
        ))}
      </div>
      <div
        className="flex translate-x-2 flex-col p-3 rounded-lg bg-base-300/80 cursor-pointer"
        onClick={toggleMenu}
      >
        <button
          onClick={toggleMenu}
          className="flex lg:hidden relative w-10 h-10 p-3 bg-base-100 text-primary rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`absolute inline-block w-5 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
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
            className={`absolute inline-block w-5 h-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
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
    </div>
  );
};

export default SideBar;
