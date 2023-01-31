import React, { useState } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={`${styles.header} padding-x flex flex-jc-sb flex-ai-c`}>
      <p className={`${styles.logo} ${openMenu ? "white" : ""}`}>
        CJ PORTFOLIO
      </p>
      <Navigation />
      <button
        className={`${styles["hamburger-button"]} ${openMenu ? "white" : ""}`}
        onClick={toggleMenu}
      >
        {openMenu ? "close" : "menu"}
      </button>
      {openMenu ? <HamburgerMenu /> : ""}
    </div>
  );
};

export default Header;
