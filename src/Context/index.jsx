import { createContext, useState } from "react";

export const SoinverContext = createContext();

export const SoinverProvider = ({ children }) => {
  //Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("se ha cambiado el estado")
    console.log(isMenuOpen)
  };

  return (
    <SoinverContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        openMenu,
        closeMenu,
        toggleMenu,
      }}
    >
      {children}
    </SoinverContext.Provider>
  );
};
