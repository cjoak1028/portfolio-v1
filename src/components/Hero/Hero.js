import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div
      className={`${styles.hero} padding-x flex flex-d-c flex-ai-c flex-jc-c`}
    >
      <div>
        <p className={styles.role}>FRONT-END DEVELOPER</p>
        <h1>CHANG-JU</h1>
        <p className={styles.location}>TORONTO -- 01:23:34 PM</p>
      </div>
    </div>
  );
};

export default Hero;
