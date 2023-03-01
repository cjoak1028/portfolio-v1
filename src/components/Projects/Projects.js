import React from "react";
import styles from "./Projects.module.css";
import thePlanetsImg from "../../assets/projects/planets-desktop.png";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.project}>
        <h3>01. The Planets</h3>
        <div className={styles["flex-container"]}>
          <div className={styles["project__img"]}>
            <img src={thePlanetsImg} alt="the planets website screenshot" />
          </div>
          <div className={styles["project__text"]}>
            <p>
              A MULTI-PAGE WEBSITE THAT SHOWCASES EACH PLANET IN OUR SOLAR
              SYSTEM
            </p>
            <ul className={styles["project__links"]}>
              <li>
                <a href={"https://github.com/cjoak1028/planets-fact-site"}>
                  REPO
                </a>
              </li>
              <li>
                <a href={"https://planets-fact-site-sand.vercel.app/"}>SITE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <h3>01. The Planets</h3>
        <div className={styles["flex-container"]}>
          <div className={styles["project__img"]}>
            <img src={thePlanetsImg} alt="the planets website screenshot" />
          </div>
          <div className={styles["project__text"]}>
            <p>
              A MULTI-PAGE WEBSITE THAT SHOWCASES EACH PLANET IN OUR SOLAR
              SYSTEM
            </p>
            <ul className={styles["project__links"]}>
              <li>
                <a href={"https://github.com/cjoak1028/planets-fact-site"}>
                  REPO
                </a>
              </li>
              <li>
                <a href={"https://planets-fact-site-sand.vercel.app/"}>SITE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <h3>01. The Planets</h3>
        <div className={styles["flex-container"]}>
          <div className={styles["project__img"]}>
            <img src={thePlanetsImg} alt="the planets website screenshot" />
          </div>
          <div className={styles["project__text"]}>
            <p>
              A MULTI-PAGE WEBSITE THAT SHOWCASES EACH PLANET IN OUR SOLAR
              SYSTEM
            </p>
            <ul className={styles["project__links"]}>
              <li>
                <a href={"https://github.com/cjoak1028/planets-fact-site"}>
                  REPO
                </a>
              </li>
              <li>
                <a href={"https://planets-fact-site-sand.vercel.app/"}>SITE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
