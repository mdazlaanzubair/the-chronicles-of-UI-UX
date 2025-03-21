"use client";

import React, { useState } from "react";
import Link from "next/link";

const ButtonLink = ({ className, label, link, icon, target = "_self" }) => {
  const [position, setPosition] = useState({ x: `50%`, y: `-150%` });

  const handleMouseMove = (e) => {
    e.stopPropagation();
    console.log(link, icon, target);

    // Calculate relative position within the link element
    const cardRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - cardRect.left;
    const relativeY = e.clientY - cardRect.top;

    setPosition({ x: `${relativeX}px`, y: `${relativeY}px` });
  };

  return (
    <Link
      href={link}
      title={label}
      target={target}
      className={`${className} relative flex gap-3 group items-center justify-center w-auto h-auto whitespace-nowrap font-semibold text-xs text-primary hover:text-secondary p-2 rounded-lg transition-all ease-in-out duration-300`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: `50%`, y: `-150%` })}
    >
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-1000`}
        style={{
          background: `radial-gradient(circle at ${position.x} ${position.y}, rgb(254,239,159 / 0.1) 10%, rgb(254,239,159 / 0.09) 20%, transparent)`,
        }}
      />
      {icon ? icon : label}
    </Link>
  );
};

export default ButtonLink;
