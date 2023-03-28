import React from "react";
import styles from "./Section.module.css";
import Marquee from "react-fast-marquee";

const Section = (props) => {
  return (
    <div className={styles.section}>
      <Marquee
        gradient={false}
        speed={50}
        direction={props.direction}
        className={styles["marquee__title"]}
      >
        <h3>{props.title}</h3>
        <h3>{props.title}</h3>
        <h3>{props.title}</h3>
        <h3>{props.title}</h3>
        <h3>{props.title}</h3>
        <h3>{props.title}</h3>
      </Marquee>
      <div className={styles["section__content"]}>{props.children}</div>
    </div>
  );
};

export default Section;
