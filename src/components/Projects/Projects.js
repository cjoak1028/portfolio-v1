import React from "react";
import styles from "./Projects.module.css";
import thePlanetsImg from "../../assets/projects/planets-desktop.png";
import photosnapImg from "../../assets/projects/photosnap-desktop.png";
import portfolioImg from "../../assets/projects/cj-portfolio-desktop.png";

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
        <h3>02. Photosnap</h3>
        <div className={styles["flex-container"]}>
          <div className={styles["project__img"]}>
            <img src={photosnapImg} alt="the planets website screenshot" />
          </div>
          <div className={styles["project__text"]}>
            <p>A MARKETING WEBSITE FOR A PHOTO-SHARING APPLICATION</p>
            <ul className={styles["project__links"]}>
              <li>
                <a
                  href={
                    "https://github.com/cjoak1028/photosnap-multi-page-website"
                  }
                >
                  REPO
                </a>
              </li>
              <li>
                <a
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
      <div className={styles.project}>
        <h3>03. CJ Portfolio</h3>
        <div className={styles["flex-container"]}>
          <div className={styles["project__img"]}>
            <img src={portfolioImg} alt="the planets website screenshot" />
          </div>
          <div className={styles["project__text"]}>
            <p>A PORTFOLIO WEBSITE THAT SHOWCASES MY SKILLS AND PROJECTS</p>
            <ul className={styles["project__links"]}>
              <li>
                <a href={"https://github.com/cjoak1028/portfolio-website-v1"}>
                  REPO
                </a>
              </li>
              <li>
                <a href={""}>SITE</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
