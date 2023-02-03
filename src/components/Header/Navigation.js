import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>01/ About</li>
      <li>02/ Skills</li>
      <li>03/ Projects</li>
      <li>04/ Contact</li>
    </ul>
  );
};

export default Navigation;
