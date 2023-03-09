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
      <p className={styles.logo}>CJ PORTFOLIO</p>
      <Navigation />
      <button
        className={styles["hamburger-button"]}
        onClick={() => setOpenMenu(true)}
      >
        menu
      </button>
      <HamburgerMenu
        open={openMenu}
        getOpenMenu={(open) => setOpenMenu(open)}
      />
    </div>
  );
};

export default Header;
