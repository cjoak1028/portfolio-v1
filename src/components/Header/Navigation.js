import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>About</li>
      <li>-</li>
      <li>Projects</li>
      <li>-</li>
      <li>Contact</li>
    </ul>
  );
};

export default Navigation;
