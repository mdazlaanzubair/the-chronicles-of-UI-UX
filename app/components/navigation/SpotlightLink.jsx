"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SpotlightLink = ({ href, title, icon }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const activeSection = usePathname();
  const handleMouseMove = (e) => {
    e.stopPropagation();

    // Calculate relative position within the link element
    const cardRect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - cardRect.left;
    const relativeY = e.clientY - cardRect.top;

    setPosition({ x: relativeX, y: relativeY });
  };

  return (
    <Link
      href={href}
      className={`nav-link group gap-4 ${
        href == activeSection && "nav-link-active"
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 rounded-lg ${
          href === activeSection && "opacity-0 group-hover:opacity-100"
        } transition-all ease-in-out duration-300`}
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgb(133 136 144 / 0.09) 1%, transparent, transparent )`,
        }}
      />
      <span className="min-w-4 min-h-4 max-w-4 max-h-4">{icon}</span>
      <p>{title}</p>
    </Link>
  );
};

export default SpotlightLink;
