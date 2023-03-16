import React from "react";
import styles from "./Projects.module.css";
import Section from "../Layout/Section";
import thePlanetsImg from "../../assets/img/planets-desktop.png";
import photosnapImg from "../../assets/img/photosnap-desktop.png";
import portfolioImg from "../../assets/img/cj-portfolio-desktop.png";

const Projects = () => {
  return (
    <Section name={"projects"} title={"projects"}>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h3>01. The Planets</h3>
          <div className={styles["flex-container"]}>
            <div className={styles["project__img"]}>
              <img src={thePlanetsImg} alt="the planets website screenshot" />
            </div>
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
                    >
                      REPO
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={"https://planets-fact-site-sand.vercel.app/"}
                    >
                      SITE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <h3>02. Photosnap</h3>
          <div className={styles["flex-container"]}>
            <div className={styles["project__img"]}>
              <img src={photosnapImg} alt="the planets website screenshot" />
            </div>
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
                    >
                      REPO
                    </a>
                  </li>
                  <li>
                    <a
                      className={styles["project__link"]}
                      href={
                        "https://photosnap-multi-page-website-theta.vercel.app/"
                      }
                    >
                      SITE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project}>
          <h3>03. CJ Portfolio</h3>
          <div className={styles["flex-container"]}>
            <div className={styles["project__img"]}>
              <img src={portfolioImg} alt="the planets website screenshot" />
            </div>
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
                      href={"https://github.com/cjoak1028/portfolio-website-v1"}
                    >
                      REPO
                    </a>
                  </li>
                  <li>
                    <a className={styles["project__link"]} href={""}>
                      SITE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
