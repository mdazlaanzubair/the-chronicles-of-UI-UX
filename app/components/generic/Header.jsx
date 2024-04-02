"use client";
import { GeneralContext } from "@/app/context/GeneralContext";
import React, { useContext } from "react";
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  const { toggleMenu } = useContext(GeneralContext);

  return (
    <div className="header-section">
      <Link
        href="/about"
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

      <Button label="Menu" onClick={toggleMenu} />
    </div>
  );
};

export default Header;
