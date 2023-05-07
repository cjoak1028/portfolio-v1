import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const hero = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={hero}
        className={styles.hero}
      >
        <div className={styles["hero__content"]}>
          <div className={styles["hero__section-1"]}>
            <div className={styles["intro-1"]}>
              <motion.p variants={fromBottom} className={styles.greeting}>
                Hello, my name is
              </motion.p>
              <motion.p variants={fromBottom} className={styles.name}>
                David Kim.
              </motion.p>
            </div>
            <div className={styles["hero__image-container"]}>
              <motion.div
                variants={fromBottom}
                className={styles["hero-image"]}
              ></motion.div>
              {/* <div className={styles.email}>
                <motion.p variants={fromBottom}>
                  changju.kim10@gmail.com
                </motion.p>
              </div> */}
            </div>
          </div>
          <div className={styles["hero__section-2"]}>
            <div className={styles["intro-1"]}>
              <motion.p variants={fromBottom} className={styles.greeting}>
                Hello, my name is
              </motion.p>
              <motion.p variants={fromBottom} className={styles.name}>
                David Kim.
              </motion.p>
            </div>
            <div className={styles["intro-2"]}>
              <motion.p variants={fromBottom}>
                I am a <span className={styles.bold}>software engineer</span>
              </motion.p>
              <motion.p variants={fromBottom}>
                based in <span className={styles.bold}>Toronto</span>.
              </motion.p>
              {/* <div className={styles.email}>
                <motion.p variants={fromBottom}>
                  changju.kim10@gmail.com
                </motion.p>
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
