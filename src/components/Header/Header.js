import React from "react";
import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>CJ PORTFOLIO</p>
      <Navigation />
      <button className={styles["hamburger-button"]}>Menu</button>
    </div>
  );
};

export default Header;
