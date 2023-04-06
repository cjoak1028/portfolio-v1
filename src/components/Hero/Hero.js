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
    <div className={styles["hero-container"]}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={hero}
        className={styles.hero}
      >
        <div className={styles["hero__content"]}>
          <div className={styles["hero__section-1"]}>
            <div className={styles.intro}>
              <motion.p variants={fromBottom} className={styles.greeting}>
                Hello, my name is
              </motion.p>
              <motion.p variants={fromBottom} className={styles.name}>
                CHANG-JU.
              </motion.p>
            </div>
            <div>
              <motion.div
                variants={fromBottom}
                className={styles["hero-image"]}
              ></motion.div>
              {/* <div className={styles["hero__footer"]}>
                <motion.div
                  variants={fromTop}
                  className={styles["scroll-prompt"]}
                >
                  <BsArrowDownShort className={styles["arrow-icon"]} />
                  <p>Front-end Developer</p>
                </motion.div>
                <motion.div variants={fromTop} className={styles.time}>
                  <Time />
                </motion.div>
              </div> */}
            </div>
          </div>
          <div className={styles["hero__section-2"]}>
            <div className={styles.intro}>
              <motion.p variants={fromBottom} className={styles.greeting}>
                Hello, my name is
              </motion.p>
              <motion.p variants={fromBottom} className={styles.name}>
                CHANG-JU.
              </motion.p>
            </div>
            <div>
              <motion.p variants={fromBottom} className={styles.title}>
                I am a front-end developer
              </motion.p>
              <motion.p variants={fromBottom} className={styles.title}>
                based in Toronto.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
