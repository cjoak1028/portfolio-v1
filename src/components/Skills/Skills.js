import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles["skills__category"]}>
        <div
          className={`${styles["inf-scroll"]} ${styles["inf-scroll--left"]}`}
        >
          <span>Javascript - HTML - CSS - SCSS/SASS - Python - Java - C </span>
          <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
          <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
          <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
          <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
          <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        </div>
        <h3>Languages</h3>
      </div>
      <div className={styles["skills__category"]}>
        <div
          className={`${styles["inf-scroll"]} ${styles["inf-scroll--right"]}`}
        >
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
          <span>- React - Node.JS - Express - Mongoose - React Native</span>
        </div>
        <h3>Libraries/Frameworks</h3>
      </div>
      <div className={styles["skills__category"]}>
        <div
          className={`${styles["inf-scroll"]} ${styles["inf-scroll--left"]}`}
        >
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
          <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        </div>
        <h3>Other Tools</h3>
      </div>
    </div>
  );
};

export default Skills;
