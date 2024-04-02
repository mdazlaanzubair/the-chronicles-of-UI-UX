"use client";

import { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <GeneralContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
