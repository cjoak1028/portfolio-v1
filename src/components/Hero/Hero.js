import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSmile } from "react-icons/ai";

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
    <div className={`${styles.hero} flex flex-d-c flex-ai-c flex-jc-c`}>
      <div className={styles["hero-title"]}>
        <p className={styles.role}>FRONT-END DEVELOPER</p>
        <h1>
          CHANG
          <AiOutlineSmile className={styles["name-divider"]} />
          JU
        </h1>
        <p className={styles.location}>
          TORONTO &#8212;{" "}
          <span className={styles.time}>{date.toLocaleTimeString()}</span>
        </p>
      </div>

      <HiOutlineChevronDown className={styles.arrow} />
    </div>
  );
};

export default Hero;
