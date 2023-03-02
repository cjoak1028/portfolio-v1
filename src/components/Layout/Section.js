import React from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <div
      className={`${styles.section} ${props.rotate ? styles.rotate : ""} ${
        props.border ? styles.border : ""
      } ${props.name === "about" ? styles["section--about"] : ""} ${
        props.name === "projects" ? styles["section--projects"] : ""
      }`}
    >
      <div className={styles["section__title"]}>
        <h2>{`${props.title}`}</h2>
        <span className={styles.line}></span>
      </div>
      <div className={styles["section__content"]}>{props.children}</div>
    </div>
  );
};

export default Section;
