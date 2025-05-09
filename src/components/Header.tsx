import React, { useState } from "react";
import { useDarkMode } from "../provider/DarkModeProvider";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";
import DarkModeToggler from "./DarkModeToggler";
import FancyButton from "./FancyButton";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  const { isDarkMode } = useDarkMode();
  const [isToggleMenu, setIsToggleMenu] = useState(false);

  return (
    <>
      <div className="w-full h-auto flex flex-wrap justify-between px-4 py-2 border-b border-base-content/5 bg-base-200">
        <div className="flex shrink items-center justify-between gap-1">
          <img
            className="w-8 h-8"
            src={isDarkMode ? dark_logo : light_logo}
            alt="Muhammad Azlaan Zubair Logo"
          />
          <FancyButton
            className={
              "w-[43%] text-base text-left btn-sm btn-outline border-transparent bg-transparent shadow-none font-semibold text-base-content"
            }
            onClick={() => navigate("/")}
            text_1={"Azlaan"}
            text_2={"Zubair"}
          />
          <DarkModeToggler />
        </div>
        <FancyButton
          className={
            "w-[15%] text-center btn-sm btn-outline border-transparent bg-transparent shadow-none btn-default"
          }
          onClick={() => setIsToggleMenu(!isToggleMenu)}
          text_1={"Menu"}
          text_2={"Open"}
        />
        <div
          className={`w-full flex flex-wrap items-center justify-between gap-2 py-2 ${
            isToggleMenu ? "h-auto" : "h-0 p-0 hidden"
          }`}
        >
          {/* <button
            className="btn btn-sm w-[49%]"
            onClick={() => navigate("/")}
          >
            Home
          </button> */}
          <button
            className="btn btn-sm w-[49%]"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className="btn btn-sm w-[49%]"
            onClick={() => navigate("/case-studies")}
          >
            Case Studies
          </button>
          <button
            className="btn btn-sm w-[49%]"
            onClick={() => navigate("/personal-projects")}
          >
            Side Projects
          </button>
          <button
            className="btn btn-sm w-[49%]"
            onClick={() => navigate("/contact")}
          >
            Side Projects
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
