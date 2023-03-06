import React from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <div className={`${styles["hamburger-menu"]} padding-x`}>
      <ul className={styles["hamburger-menu__links"]}>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      <span className={styles.divider}></span>
      <div className={styles["hamburger-menu__info"]}>
        <p>Chang-Ju Kim</p>
        <p>Front-end Developer</p>
        <p>Based in Toronto</p>
        <div className={styles.email}>
          <span className={styles.line}></span>
          <p>changju.kim10@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
