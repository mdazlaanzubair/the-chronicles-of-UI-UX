"use client";
import React, { useState } from "react";

const Button = ({ label, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.stopPropagation();

    // Calculate relative position within the link element
    const cardRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - cardRect.left;
    const relativeY = e.clientY - cardRect.top;

    setPosition({ x: relativeX, y: relativeY });
  };

  return (
    <button
      onClick={() => onClick && onClick()}
      className="relative w-auto h-auto whitespace-nowrap group bg-primary/0 border border-primary/20 text-primary text-xs p-3 pb-2 rounded-lg"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300`}
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgb(133 136 144 / 0.09) 25%, transparent, transparent )`,
        }}
      />
      {label}
    </button>
  );
};

export default Button;
