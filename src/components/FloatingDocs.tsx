import { useEffect, useRef, type JSX } from "react";
import { smoothScroller } from "../utils/pageScrollers";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";
// import { IoSunny } from "react-icons/io5";
// import { FaMoon } from "react-icons/fa";
import { useDarkMode } from "../provider/DarkModeProvider";

interface NavItems {
  sectionId: string;
  title: string;
  icon: JSX.Element;
}

const FloatingDocs = ({
  navList,
  jumpToId,
}: {
  navList: NavItems[];
  jumpToId?: string;
}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const floatingBarRef = useRef<any>(null);

  if (navList && navList.length > 0) {
    useEffect(() => {
      if (floatingBarRef.current) {
        floatingBarRef.current.classList.add("opacity-0", "-z-10", "w-[0px]");

        const timer = setTimeout(() => {
          floatingBarRef.current.classList.remove(
            "opacity-0",
            "-z-10",
            "w-[0px]"
          );
          floatingBarRef.current.classList.add("opacity-100", "z-50", "w-auto");
        }, 1000);
        return () => clearTimeout(timer);
      }
    }, []);

    return (
      <div
        ref={floatingBarRef}
        className={`flex flex-row items-center justify-center gap-1 h-fit w-auto lg:max-w-[500px] mx-auto px-px z-50 shadow-2xl
        fixed bottom-2 lg:bottom-3 rounded-lg border-2 border-base-300 bg-base-200/70 backdrop-blur transition-opacity ease-in-out duration-300`}
      >
        {/* <div
          className="tooltip"
          data-tip={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          <button
            onClick={toggleDarkMode}
            className="group w-14 h-14 text-xl flex flex-col items-center justify-center cursor-pointer hover:mx-5 transition-all ease-in-out duration-300"
          >
            <span className="text-xl group-hover:text-3xl transition-all ease-in-out duration-300">
              {isDarkMode ? <IoSunny /> : <FaMoon />}
            </span>
          </button>
        </div> */}

        {jumpToId && jumpToId.length > 0 && (
          <div className="tooltip" data-tip={"Jump to Top"}>
            <button
              onClick={() => smoothScroller(jumpToId)}
              className="group w-14 h-14 text-xl flex flex-col items-center justify-center cursor-pointer"
            >
              <div className="bg-base-content rounded-lg p-2">
                <img
                  className="w-8 h-8 group-hover:scale-110 transition-all ease-in-out duration-300"
                  src={isDarkMode ? light_logo : dark_logo}
                  alt="Muhammad Azlaan Zubair Logo"
                />
              </div>
            </button>
          </div>
        )}
        {navList.map((item, index) => (
          <div className="tooltip" data-tip={item.title}>
            <button
              onClick={() => smoothScroller(item.sectionId)}
              key={index}
              className="group w-14 h-14 text-xl flex flex-col items-center justify-center cursor-pointer hover:mx-3 hover:text-accent transition-all ease-in-out duration-300"
            >
              <span className="text-xl  group-hover:scale-125 transition-all ease-in-out duration-300">
                {item.icon}
              </span>
              {/* <span className="dock-label text-[12px]">{item.title}</span> */}
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default FloatingDocs;
