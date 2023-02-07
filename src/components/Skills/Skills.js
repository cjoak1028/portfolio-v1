import React from "react";
import styles from "./Skills.module.css";
import { AiOutlineSmile } from "react-icons/ai";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles["inf-scroll"]}>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
        <span>JavaScript - HTML - CSS - SCSS/SASS - Python - Java - C -</span>
      </div>
      <div className={styles["heading-container"]}>
        <h3>Languages</h3>
      </div>
      <div className={styles["inf-scroll-rev"]}>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
        <span>- React - Node.JS - Express - Mongoose - React Native</span>
      </div>
      <div className={styles["heading-container"]}>
        <h3>LIBRARIES/FRAMEWORKS</h3>
      </div>
      <div className={styles["inf-scroll"]}>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
        <span>Git - Webpack - MongoDB - Figma - Photoshop -</span>
      </div>
      <div className={styles["heading-container"]}>
        <h3>Other Tools</h3>
      </div>
    </div>
  );
};

export default Skills;
