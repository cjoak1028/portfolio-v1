import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { BsArrowDownShort } from "react-icons/bs";
import Time from "./Time";

const hero = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
  hidden: { opacity: 0 },
};

const fromBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
    },
  },
  hidden: {
    opacity: 0,
    y: 5,
  },
};

const fromTop = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 250,
    },
  },
  hidden: {
    opacity: 0,
    y: -5,
  },
};

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={hero}
      className={styles.hero}
    >
      <div className={styles["hero-container"]}>
        <div className={styles.image}>
          <motion.p variants={fromBottom} className={styles.greeting}>
            Hello,
          </motion.p>
          <div>
            <motion.div
              variants={fromBottom}
              className={styles["hero-image"]}
            ></motion.div>
          </div>
        </div>
        <div className={styles.intro}>
          <motion.p variants={fromBottom} className={styles.greeting}>
            Hello,
          </motion.p>
          <div>
            <motion.p variants={fromBottom}>My name is Chang-Ju.</motion.p>
            <motion.p variants={fromBottom}>
              I am a front-end developer.
            </motion.p>
          </div>
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <motion.div variants={fromTop} className={styles["scroll-prompt"]}>
          <BsArrowDownShort className={styles["arrow-icon"]} />
          <p>Scroll Down</p>
        </motion.div>
        <motion.div variants={fromTop} className={styles.time}>
          <Time />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
