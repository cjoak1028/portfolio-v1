import React from "react";
import styles from "./Prompt.module.css";
import { motion } from "framer-motion";
import { BsArrowDownShort } from "react-icons/bs";

const Prompt = ({ message }) => {
  return (
    <div className={styles["prompt-container"]}>
      <motion.div
        className={styles.prompt}
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.6, delay: 0.1 },
        }}
        viewport={{ once: true }}
      >
        <p>{message}</p>
        {/* <BsArrowDownShort className={styles["arrow-icon"]} /> */}
      </motion.div>
    </div>
  );
};

export default Prompt;
