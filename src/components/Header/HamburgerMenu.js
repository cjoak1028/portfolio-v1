import React from "react";
import { Link } from "react-scroll";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ open, getOpenMenu }) => {
  const handleMenuClick = () => {
    getOpenMenu(false);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div
      className={`${styles["hamburger-menu"]} ${
        open ? styles.open : styles.close
      } padding-x`}
    >
      <div className={`${styles["hamburger-menu__header"]}`}>
        <p className={styles.logo}>
          {" "}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuClick}
          >
            CJ PORTFOLIO
          </Link>
        </p>
        <button className={styles["close-button"]} onClick={handleMenuClick}>
          close
        </button>
      </div>
      <div className={styles["hamburger-menu__content"]}>
        <nav>
          <ul className={styles["hamburger-menu__links"]}>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <span className={styles.divider}></span>
        <div className={styles["hamburger-menu__info"]}>
          <p>Chang-Ju (David) Kim</p>
          <p>Front-end Developer</p>
          <p>Based in Toronto</p>
          <div className={styles.email}>
            <span className={styles.line}></span>
            <p>changju.kim10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
