import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { HiOutlineChevronDown } from "react-icons/hi";

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
    <div
      className={`${styles.hero} padding-x flex flex-d-c flex-ai-c flex-jc-c`}
    >
      <div>
        <p className={styles.role}>FRONT-END DEVELOPER</p>
        <h1>CHANG*JU</h1>
        <p className={styles.location}>
          TORONTO --{" "}
          <span className={styles.time}>{date.toLocaleTimeString()}</span>
        </p>
      </div>
      <HiOutlineChevronDown className={styles.arrow} />
    </div>
  );
};

export default Hero;
