import React from "react";
import styles from "./About.module.css";
import { AiOutlineSmile } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";

const About = () => {
  return (
    <div className={`${styles.about}`}>
      <h3>PASSIONATE FRONT-END DEVELOPER BASED IN TORONTO</h3>
      <div className={styles["about__content"]}>
        <div className={styles["about__me"]}>
          <p className={`${styles.greeting} flex flex-ai-c`}>
            Hello <AiOutlineSmile className={styles["smiley-icon"]} /> &#8212;
            I'm Chang-Ju Kim.
          </p>
          <p>
            I discovered my passion for web development in 2017 during an
            internship as a full-stack web developer. With my love for great design and
            an innate tendency to give a considerable amount of attention to detail, I am able to
            craft websites and applications that are both functional and
            visually appealing with great proficiency.
          </p>
          <p>
            I am continuously experimenting with new tools and techniques with
            the goal of delivering the finest web experiences.
          </p>
        </div>
        <div className={styles["about__experience"]}>
          <div className={styles["about__career"]}>
            <h4>Career</h4>
            <div className="flex flex-jc-sb">
              <p className={styles.company}>BioRender</p>
              <p className={styles.year}>2017</p>
              <p className={styles.year}>2018</p>
            </div>
          </div>
          <div className={styles["about__tech"]}>
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
      <div className={styles.transition}>
        <p>CHECK OUT SOME OF MY WORK </p>
        <BsArrowDownShort className={styles["arrow-icon"]} />
      </div>
    </div>
  );
};

export default About;
