import React from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <div
      className={styles.section}
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
