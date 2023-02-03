import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li initial={{ opacity: 0 }}>01/ About</li>
      <li initial={{ opacity: 0 }}>02/ Skills</li>
      <li initial={{ opacity: 0 }}>03/ Projects</li>
      <li initial={{ opacity: 0 }}>04/ Contact</li>
    </ul>
  );
};

export default Navigation;
