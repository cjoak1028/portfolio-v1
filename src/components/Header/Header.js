import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!openMenu) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    }
  }, [openMenu]);

  const handleMenuClick = () => {
    setOpenMenu(true);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className={`${styles.header} padding-x flex flex-jc-sb flex-ai-c`}>
      <p className={styles.logo}>CJ PORTFOLIO</p>
      <Navigation />
      <button
        className={`${styles["hamburger-button"]} ${
          isButtonDisabled ? styles.disabled : ""
        }`}
        onClick={handleMenuClick}
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
