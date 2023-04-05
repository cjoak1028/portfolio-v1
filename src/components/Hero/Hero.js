import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { BsArrowDownShort } from "react-icons/bs";
import Time from "./Time";
import Div100vh from "react-div-100vh";

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
    <Div100vh className={styles["hero-container"]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={hero}
        className={styles.hero}
      >
        <div className={styles["hero__content"]}>
          <div className={styles["hero__section-1"]}>
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
          <div className={styles["hero__section-2"]}>
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
        <div className={styles["hero__footer"]}>
          <motion.div variants={fromTop} className={styles["scroll-prompt"]}>
            <BsArrowDownShort className={styles["arrow-icon"]} />
            <p>Scroll Down</p>
          </motion.div>
          <motion.div variants={fromTop} className={styles.time}>
            <Time />
          </motion.div>
        </div>
      </motion.div>
    </Div100vh>
  );
};

export default Hero;
