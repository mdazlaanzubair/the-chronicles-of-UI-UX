import Link from "next/link";
import React from "react";
import { navList } from "./components/navigation/navigation-list";
import Figure from "./components/generic/Figure";
import img404 from "@/public/other/404.jpg";

export default function Custom404() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row-reverse justify-center items-center p-6 lg:p-32">
      <div className="hidden lg:w-1/2 lg:flex">
        <div className="container mx-auto">
          <Figure
            // className="w-3/4 h-3/2 mx-auto"
            size="w-full h-full"
            src={img404.src}
            caption="Found Peace"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col">
        <h1 className="font-display text-6xl font-bold mb-3">Oops!</h1>
        <p className="text-2xl font-bold mb-3">
          The page you are requesting doesn&apos;t exist.
        </p>
        <p className="text-base font-bold mb-3">
          Here are some helpful links instead:
        </p>
        <ul className="list-inside mb-3">
          {navList?.map((nav, index) => (
            <li
              key={index}
              className="flex items-center text-sm gap-2 mb-1 text-primary hover:text-secondary transition-all ease-in-out duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3 text-secondary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>

              <Link href={nav?.url}>{nav?.title}</Link>
            </li>
          ))}
        </ul>
        <Link
          className="text-secondary hover:text-accent transition-all ease-in-out duration-500"
          href="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
