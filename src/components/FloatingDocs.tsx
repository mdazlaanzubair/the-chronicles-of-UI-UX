import { useEffect, useRef, type JSX } from "react";
import { smoothScroller } from "../utils/pageScrollers";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";
import { useDarkMode } from "../provider/DarkModeProvider";
import { useNavigate } from "react-router-dom";

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
  const { isDarkMode } = useDarkMode();
  const navigate = useNavigate();
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
        <div
          className="tooltip"
          data-tip={
            !jumpToId || jumpToId.length <= 0 ? "Go Back" : "Jump to Top"
          }
        >
          <button
            onClick={() =>
              jumpToId && jumpToId.length > 0
                ? smoothScroller(jumpToId)
                : navigate(-1)
            }
            className={`group w-14 h-14 text-xl flex flex-col items-center justify-center cursor-pointer`}
          >
            <div className="bg-base-content rounded-lg p-2">
              <img
                className={`w-8 h-8 group-hover:scale-110 ${
                  !jumpToId || jumpToId.length <= 0
                    ? "group-hover:-rotate-90"
                    : ""
                } transition-all ease-in-out duration-300`}
                src={isDarkMode ? light_logo : dark_logo}
                alt="Muhammad Azlaan Zubair Logo"
              />
            </div>
          </button>
        </div>
        {navList.map((item, index) => (
          <div className="tooltip" data-tip={item.title} key={index}>
            <button
              onClick={() => smoothScroller(item.sectionId)}
              className="group w-14 h-14 text-xl flex flex-col items-center justify-center cursor-pointer hover:mx-3 hover:text-accent transition-all ease-in-out duration-300"
            >
              <span className="text-xl  group-hover:scale-125 transition-all ease-in-out duration-300">
                {item.icon}
              </span>
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default FloatingDocs;
