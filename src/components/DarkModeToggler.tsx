import React from "react";
import { useDarkMode } from "../provider/DarkModeProvider";

const DarkModeToggler: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="label text-base-content text-xs font-semibold" htmlFor="dark-mode-toggler">
      <input
        id="dark-mode-toggler"
        name="dark-mode-toggler"
        type="checkbox"
        defaultChecked
        className="toggle toggle-accent toggle-xs"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      Dark Mode
    </label>
  );
};

export default DarkModeToggler;
