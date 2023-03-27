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
        <motion.div variants={opacity}>
          <div className={styles["scroll-container"]}>
            <div className={styles["inf-scroll"]}>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM</span>
              <span className={styles.divider}>X</span>
              <span className={styles.name}>CHANG-JU KIM </span>
              <span className={styles.divider}>X</span>
            </div>
          </div>
          <div className={styles["hero-image"]}></div>
        </motion.div>
        <div className={styles["hero-text"]}>
          <div className={styles.about}>
            <div className={styles["flex-container"]}>
              <motion.p className={styles.position} variants={fromBottom}>
                Front-End Developer
              </motion.p>
              <motion.p className={styles.location} variants={fromBottom}>
                TORONTO &#8212;{" "}
                <span className={styles.time}>{date.toLocaleTimeString()}</span>
              </motion.p>
            </div>
          </div>
          {/* <motion.div className={styles.contact} variants={contact}>
            <span className={styles.line}></span>
            <p className={styles.email}>changju.kim10@gmail.com</p>
          </motion.div> */}
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
