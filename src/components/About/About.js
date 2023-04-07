import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import Section from "../Layout/Section";
import { AiOutlineSmile } from "react-icons/ai";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <Section name="about" title="about">
      <div className={styles.about}>
        <motion.div
          className={styles["about__me"]}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          {/* <p className={styles.greeting}>
            Hello <AiOutlineSmile className={styles["smiley-icon"]} /> &#8212;
            I'm Chang-Ju (David) Kim.
          </p> */}
          <p className={styles.greeting}>
            Hello &#8212; I'm Chang-Ju (David) Kim.
          </p>
          <p>
            As a front-end developer, I am driven by a desire to create digital
            experiences that are accessible and user-friendly for everyone. With
            more and more everyday tasks turning digital, it is crucial that we
            are mindful of those who may have difficulty adapting to the rapidly
            changing times. That's why I am deticated to building web
            experiences that cater to a diverse range of demographics, ensuring
            that everyone has equal access to the digital world.
          </p>
          <p>
            Currently, my focus is to stay up-to-date with the latest trends and
            technologies in web development, and I am seeking new opportunities
            to expand my skill set.
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
          <p className={styles.intro}>
            Here are some of my skills and experiences:
          </p>
          <div className={styles["about__career"]}>
            <h4 className={styles.title}>Career</h4>
            <div className="flex flex-jc-sb">
              <span className={styles.company}>BioRender</span>
              <span className={styles.year}>2017</span>
              <span className={styles.year}>2018</span>
            </div>
          </div>
          <div className={styles["about__tech"]}>
            <h4 className={styles.title}>Technologies</h4>
            <div className={styles["tech-category"]}>
              <Marquee gradient={false} speed={50} className={styles.marquee}>
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
                <span className={styles.space}></span>
              </Marquee>
              <h5 className={styles["category-title"]}>Languages</h5>
            </div>
            <div className={styles["tech-category"]}>
              <Marquee
                gradient={false}
                speed={30}
                direction={"right"}
                className={styles.marquee}
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
                <span className={styles.space}></span>
              </Marquee>
              <h5 className={styles["category-title"]}>Libraries/Frameworks</h5>
            </div>
            <div className={styles["tech-category"]}>
              <Marquee gradient={false} speed={40} className={styles.marquee}>
                <span className={styles.skill}>Git</span>
                <span className={styles.divider}>|</span>
                <span className={styles.skill}>Webpack</span>
                <span className={styles.divider}>|</span>
                <span className={styles.skill}>MongoDB</span>
                <span className={styles.divider}>|</span>
                <span className={styles.skill}>Figma</span>
                <span className={styles.divider}>|</span>
                <span className={styles.skill}>Photoshop</span>
                <span className={styles.space}></span>
              </Marquee>
              <h5 className={styles["category-title"]}>Other</h5>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
