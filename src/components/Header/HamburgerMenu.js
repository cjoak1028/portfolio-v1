import React from "react";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <div className={`${styles["hamburger-menu"]} padding-x`}>
      <ul>
        <li>01/ ABOUT</li>
        <li>02/ SKILLS</li>
        <li>03/ PROJECTS</li>
        <li>04/ CONTACT</li>
      </ul>
      <p className={styles.email}>changju.kim10@gmail.com</p>
    </div>
  );
};

export default HamburgerMenu;
