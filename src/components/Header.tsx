import { useDarkMode } from "../provider/DarkModeProvider";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";
import DarkModeToggler from "./DarkModeToggler";
import FancyButton from "./FancyButton";
import { useNavigate } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

const Header = ({ showFloatBar }: { showFloatBar: boolean }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  // in order to avoid jerk of relative to sticky two bars are being rendered only
  // hide and show will be made conditional for smoothly transition effect
  return (
    <>
      {/* static bar */}
      <div
        className={`navbar w-full lg:w-[500px] mx-auto ${
          showFloatBar ? "opacity-0" : " opacity-100"
        } border-b-2 border-base-100`}
      >
        <div className="navbar-start pl-3">
          <DarkModeToggler />
        </div>
        <div className="navbar-center">
          <div
            role="button"
            className="group flex w-auto cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="w-8 h-8"
              src={isDarkMode ? dark_logo : light_logo}
              alt="Muhammad Azlaan Zubair Logo"
            />
            <FancyButton
              className={
                "w-14 text-base text-left btn-sm btn-outline border-transparent bg-transparent shadow-none font-semibold text-base-content"
              }
              onClick={() => navigate("/")}
              text_1={"Azlaan"}
              text_2={"Zubair"}
            />
          </div>
        </div>
        <div className="navbar-end">
          <NavigationMenu />
        </div>
      </div>

      {/* floating bar */}
      <div
        className={`navbar w-full lg:w-[500px] fixed top-0 bg-base-200/70 backdrop-blur mx-auto ${
          showFloatBar ? "opacity-100 z-50" : " opacity-0 -z-10"
        } border-b-2 border-base-100 transition-all ease-in-out duration-300`}
      >
        <div className="navbar-start pl-3">
          <DarkModeToggler />
        </div>
        <div className="navbar-center">
          <div
            role="button"
            className="group flex w-auto cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              className="w-8 h-8"
              src={isDarkMode ? dark_logo : light_logo}
              alt="Muhammad Azlaan Zubair Logo"
            />
            <FancyButton
              className={
                "w-14 text-base text-left btn-sm btn-outline border-transparent bg-transparent shadow-none font-semibold text-base-content"
              }
              onClick={() => navigate("/")}
              text_1={"Azlaan"}
              text_2={"Zubair"}
            />
          </div>
        </div>
        <div className="navbar-end">
          <NavigationMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
