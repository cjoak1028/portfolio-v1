import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import Section from "../Layout/Section";
import { AiOutlineSmile } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <Section name="about" title="about">
      <div className={`${styles.about}`}>
        <div className={styles["about__content"]}>
          <motion.div
            className={styles["about__me"]}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <p className={`${styles.greeting} flex flex-ai-c`}>
              Hello <AiOutlineSmile className={styles["smiley-icon"]} /> &#8212;
              I'm Chang-Ju (David) Kim.
            </p>
            <p>
              I discovered my passion for web development in 2017 during an
              internship as a full-stack web developer. With my love for great
              design and being naturally detail-oriented, I can build websites
              and applications that are both functional and visually appealing.
            </p>
            <p>
              I am continuously experimenting with new tools and techniques with
              the goal of delivering the finest web experiences.
            </p>
          </motion.div>
          <motion.div
            className={styles["about__experience"]}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
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
                <Marquee gradient={false} speed={70}>
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
                </Marquee>
                <h5 className={styles["category-title"]}>Languages</h5>
              </div>
              <div className={styles["tech-category"]}>
                <Marquee gradient={false} speed={40} direction={"right"}>
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
                </Marquee>
                <h5 className={styles["category-title"]}>
                  Libraries/Frameworks
                </h5>
              </div>
              <div className={styles["tech-category"]}>
                <Marquee gradient={false} speed={60}>
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
                </Marquee>
                <h5 className={styles["category-title"]}>Other</h5>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
