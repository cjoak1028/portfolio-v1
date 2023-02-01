import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
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
    <div
      className={`${styles.hero} padding-x flex flex-d-c flex-ai-c flex-jc-c`}
    >
      <div>
        <p className={styles.role}>FRONT-END DEVELOPER</p>
        <h1>CHANG-JU</h1>
        <p className={styles.location}>
          TORONTO --{" "}
          <span className={styles.time}>
            {/* <span>01</span>:<span>23</span>:<span>34</span> <span>PM</span> */}
            {date.toLocaleTimeString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
