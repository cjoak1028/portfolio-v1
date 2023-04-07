import React from "react";
import styles from "./Section.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <div className={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
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
      </motion.div>
      <div className={styles["section__content"]}>{props.children}</div>
    </div>
  );
};

export default Section;
