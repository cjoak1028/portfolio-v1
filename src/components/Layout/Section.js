import React from "react";
import styles from "./Section.module.css";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <motion.div
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
      viewport={{ once: true }}
    >
      <div className={styles["section__title"]}>
        <h2>{`${props.title}`}</h2>
        <span className={styles.line}></span>
      </div>
      <div className={styles["section__content"]}>{props.children}</div>
    </motion.div>
  );
};

export default Section;
