import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

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
    <div className={styles.hero}>
      <div className={styles["hero-container"]}>
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
        <div className={styles["hero-image"]}></div>
        <div className={styles["hero-text"]}>
          <div className={styles.about}>
            <div className={styles["flex-container"]}>
              <p className={styles.position}>Front-End Developer</p>
              <p className={styles.location}>
                TORONTO &#8212;{" "}
                <span className={styles.time}>{date.toLocaleTimeString()}</span>
              </p>
            </div>
          </div>
          <div className={styles.contact}>
            <span className={styles.line}></span>
            <p className={styles.email}>changju.kim10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
