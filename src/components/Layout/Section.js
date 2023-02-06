import React from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <div
      className={`${styles.section} ${props.rotate ? styles["rotate"] : ""}`}
    >
      <div className={styles["container-1"]}>
        <h2 className={styles["section-title"]}>{`${props.title}`}</h2>
      </div>
      <div className={styles["container-2"]}>{props.children}</div>
    </div>
  );
};

export default Section;
