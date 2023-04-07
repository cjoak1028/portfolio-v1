import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import Section from "../Section/Section";

const Projects = () => {
  return (
    <Section name={"projects"} title={"work"} direction={"right"}>
      <div className={styles.projects}>
        <motion.div
          className={styles.project}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          <h3>01. The Planets</h3>
          <div className={styles["flex-container"]}>
            <div
              className={`${styles["project__img"]} ${styles["project__img--planets"]}`}
            ></div>
            <div className={styles["project__text"]}>
              <div>
                <div className={styles["project__description"]}>
                  <p>
                    A multi-page website that showcases each planet in our solar
                    system
                  </p>
                </div>
                <div className={styles["project__tech"]}>
                  <ul>
                    <li>
                      <p>HTML</p>
                    </li>
                    <li>
                      <p>SCSS</p>
                    </li>
                    <li>
                      <p>JS(ES6)</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles["project__links"]}>
                <ul>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={"https://github.com/cjoak1028/planets-fact-site"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      repo
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={"https://planets-fact-site-sand.vercel.app/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.project}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          <h3>02. Photosnap</h3>
          <div className={styles["flex-container"]}>
            <div
              className={`${styles["project__img"]} ${styles["project__img--photosnap"]}`}
            ></div>
            <div className={styles["project__text"]}>
              <div>
                <div className={styles["project__description"]}>
                  <p>A marketing website for a photo-sharing application</p>
                </div>
                <div className={styles["project__tech"]}>
                  <ul>
                    <li>
                      <p>HTML</p>
                    </li>
                    <li>
                      <p>SCSS</p>
                    </li>
                    <li>
                      <p>JS(ES6)</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles["project__links"]}>
                <ul>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={
                        "https://github.com/cjoak1028/photosnap-multi-page-website"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      repo
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={
                        "https://photosnap-multi-page-website-theta.vercel.app/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.project}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          <h3>03. CJ Portfolio</h3>
          <div className={styles["flex-container"]}>
            <div
              className={`${styles["project__img"]} ${styles["project__img--portfolio"]}`}
            ></div>
            <div className={styles["project__text"]}>
              <div>
                <div className={styles["project__description"]}>
                  <p>
                    A portfolio website that showcases my skills and projects
                  </p>
                </div>
                <div className={styles["project__tech"]}>
                  <ul>
                    <li>
                      <p>HTML</p>
                    </li>
                    <li>
                      <p>CSS</p>
                    </li>
                    <li>
                      <p>JS(ES6)</p>
                    </li>
                    <li>
                      <p>REACT</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles["project__links"]}>
                <ul>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={"https://github.com/cjoak1028/cjoak1028.github.io"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      repo
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={"https://cjkim.dev/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Projects;
