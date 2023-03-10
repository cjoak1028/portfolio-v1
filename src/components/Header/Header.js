import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
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
      <p className={styles.logo}>
        <Link to="hero" spy={true} smooth={true} duration={500} offset={-70}>
          CJ PORTFOLIO
        </Link>
      </p>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
            >
              About
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
            >
              Projects
            </Link>
          </li>
          <li>-</li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
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
