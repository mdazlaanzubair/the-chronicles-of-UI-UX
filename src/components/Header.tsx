import { useDarkMode } from "../provider/DarkModeProvider";
import dark_logo from "../assets/logo-dark.svg";
import light_logo from "../assets/logo-light.svg";
import DarkModeToggler from "./DarkModeToggler";
import FancyButton from "./FancyButton";
import { useNavigate } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();

  const { isDarkMode } = useDarkMode();

  return (
    <div className="navbar border-b-2 border-base-100">
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
  );
};

export default Header;
