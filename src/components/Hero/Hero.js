import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { BsArrowDownShort } from "react-icons/bs";

const hero = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.6,
    },
  },
  hidden: { opacity: 0 },
};

const opacity = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};

const fromBottom = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
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
      stiffness: 160,
    },
  },
  hidden: {
    opacity: 0,
    y: -5,
  },
};

const Hero = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={hero}
      className={styles.hero}
    >
      <div className={styles["hero-container"]}>
        <div className={styles.image}>
          <motion.p variants={opacity} className={styles.greeting}>
            Hello,
          </motion.p>
          <motion.div variants={opacity}>
            <div className={styles["hero-image"]}></div>
          </motion.div>
        </div>
        <div className={styles.intro}>
          <motion.p variants={opacity} className={styles.greeting}>
            Hello,
          </motion.p>
          <div>
            <motion.p variants={opacity}>My name is Chang-Ju.</motion.p>
            <motion.p variants={opacity}>I am a front-end developer.</motion.p>
          </div>
        </div>
      </div>
      <motion.div variants={fromTop} className={styles["scroll-prompt"]}>
        <BsArrowDownShort className={styles["arrow-icon"]} />
        <p>Scroll Down</p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
