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
        <div className={styles["about-text"]}>
          <p className={`${styles.intro} flex flex-ai-c`}>
            HELLO <AiOutlineSmile className={styles.smiley} /> &#8212; I'M
            CHANG-JU KIM.
          </p>
          <p>
            I DISCOVERED MY PASSION FOR BUILDING THINGS ON THE WEB IN 2017
            DURING AN INTERNSHIP AS A FULL-STACK WEB DEVELOPER.
          </p>
          <p>
            I LOVE GREAT DESIGN AND GIVE A CONSIDERABLE AMOUNT OF ATTENTION TO
            DETAIL. I AM ABLE TO CRAFT WEBSITES THAT ARE BOTH FUNCTIONAL AND
            VISUALLY APPEALING WITH GREAT PROFICIENCY.
          </p>
          <p>
            I AM CONTINUOUSLY EXPERIMENTING WITH NEW TOOLS AND TECHNIQUES WITH
            THE GOAL OF DELIVERING THE FINEST WEB EXPERIENCES.
          </p>
        </div>
        <div className={styles["work-experience"]}>
          <h4>Career</h4>
          <div className="flex flex-jc-sb">
            <p className={styles.company}>BioRender</p>
            <p className={styles.year}>2017</p>
            <p className={styles.year}>2018</p>
          </div>
        </div>
        <div className={styles["technologies"]}>
          <h4>Technologies</h4>
          <div className={styles["tech-category"]}>
            <div
              className={`${styles["inf-scroll"]} ${styles["inf-scroll--left"]}`}
            >
              <span className={styles.skill}>JS (ES6)</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>HTML</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>CSS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>SCSS/SASS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Python</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Java</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>C</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>JS (ES6)</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>HTML</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>CSS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>SCSS/SASS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Python</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Java</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>C</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>JS (ES6)</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>HTML</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>CSS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>SCSS/SASS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Python</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Java</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>C</span>
              <div className={styles.space}></div>
            </div>
            <h5 className={styles["category-title"]}>Languages</h5>
          </div>
          <div className={styles["tech-category"]}>
            <div
              className={`${styles["inf-scroll"]} ${styles["inf-scroll--right"]}`}
            >
              <span className={styles.skill}>React</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Node.JS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Mongoose</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>React Native</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>React</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Node.JS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Mongoose</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>React Native</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>React</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Node.JS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Mongoose</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>React Native</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>React</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Node.JS</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Express</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Mongoose</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>React Native</span>
              <div className={styles.space}></div>
            </div>
            <h5 className={styles["category-title"]}>Libraries/Frameworks</h5>
          </div>
          <div className={styles["tech-category"]}>
            <div
              className={`${styles["inf-scroll"]} ${styles["inf-scroll--left"]}`}
            >
              <span className={styles.skill}>Git</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Webpack</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>MongoDB</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Figma</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Photoshop</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>Git</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Webpack</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>MongoDB</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Figma</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Photoshop</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>Git</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Webpack</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>MongoDB</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Figma</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Photoshop</span>
              <div className={styles.space}></div>
              <span className={styles.skill}>Git</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Webpack</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>MongoDB</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Figma</span>
              <span className={styles.divider}>|</span>
              <span className={styles.skill}>Photoshop</span>
              <div className={styles.space}></div>
            </div>
            <h5 className={styles["category-title"]}>OTHER</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
