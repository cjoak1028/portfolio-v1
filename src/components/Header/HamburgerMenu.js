import React from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = ({ open, getOpenMenu }) => {
  return (
    <div
      className={`${styles["hamburger-menu"]} ${
        open ? styles.open : styles.close
      } padding-x`}
    >
      <div className={`${styles["hamburger-menu__header"]}`}>
        <p className={styles.logo}>CJ PORTFOLIO</p>
        <button
          className={styles["close-button"]}
          onClick={() => getOpenMenu(false)}
        >
          close
        </button>
      </div>
      <div className={styles["hamburger-menu__content"]}>
        <ul className={styles["hamburger-menu__links"]}>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
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
