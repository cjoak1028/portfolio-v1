import React from "react";
import styles from "./About.module.css";
import { AiOutlineSmile } from "react-icons/ai";

const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={styles["container-1"]}>
        <h3>PASSIONATE FRONT-END DEVELOPER BASED IN TORONTO</h3>
      </div>
      <div className={styles["container-2"]}>
        {/* <div className={styles["img-container"]}></div> */}
        <p className="flex flex-ai-c">
          HELLO <AiOutlineSmile className={styles.smiley} /> -- I'M CHANG-JU KIM
        </p>
        <p>
          I DISCOVERED MY PASSION FOR BUILDING THINGS ON THE WEB IN 2017 DURING
          AN INTERNSHIP AS A FULL-STACK WEB DEVELOPER.
        </p>
        <p>
          I LOVE GREAT DESIGN AND GIVE A CONSIDERABLE AMOUNT OF ATTENTION TO
          DETAIL. I AM ABLE TO CRAFT WEBSITES THAT ARE BOTH FUNCTIONAL AND
          VISUALLY APPEALING WITH GREAT PROFICIENCY.
        </p>
        <p>
          I AM CONTINUOUSLY EXPERIMENTING WITH NEW TOOLS AND TECHNIQUES WITH THE
          GOAL OF DELIVERING THE FINEST WEB EXPERIENCES.
        </p>
      </div>
    </div>
  );
};

export default About;
