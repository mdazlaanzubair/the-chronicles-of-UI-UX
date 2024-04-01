import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-2xl font-bold mb-3">404 - Page Not Found</p>
      <Link
        className="underline underline-offset-2 p-0 text-secondary hover:text-accent transition-all ease-in-out duration-500"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
