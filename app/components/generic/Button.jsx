"use client";

import React, { useState } from "react";

const Button = ({ prefix, suffix, className, label, onClick }) => {
  const [position, setPosition] = useState({ x: `50%`, y: `-150%` });

  const handleMouseMove = (e) => {
    e.stopPropagation();

    // Calculate relative position within the link element
    const cardRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - cardRect.left;
    const relativeY = e.clientY - cardRect.top;

    setPosition({ x: `${relativeX}px`, y: `${relativeY}px` });
  };

  return (
    <button
      onClick={() => onClick && onClick()}
      className={`${className} relative flex gap-1 group items-center justify-center w-auto h-auto whitespace-nowrap font-semibold text-xs bg-gradient-to-t from-base-100 to-primary/20 text-primary hover:text-accent p-3 pb-[.5rem] lg:p-4 lg:pb-[.8rem] rounded-lg`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: `50%`, y: `-150%` })}
    >
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300`}
        style={{
          background: `radial-gradient(circle at ${position.x} ${position.y}, rgb(255 255 255 / 0.1) 10%, rgb(255 255 255 / 0.09) 20%, transparent)`,
        }}
      />
      {prefix && prefix}
      {label && <span className="mb-[.17rem]">{label}</span>}
      {suffix && suffix}
    </button>
  );
};

export default Button;
