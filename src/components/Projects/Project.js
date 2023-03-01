import React from "react";
import styles from "./Project.module.css";
import planetsImage from "../../assets/projects/planets-desktop.png";

const Project = ({ num, title, description, repo, link }) => {
  return (
    <div className={styles.project}>
      <div className={styles["project-text"]}>
        <h3>
          {num <= 9 ? `0${num}.` : num} {title}
        </h3>
        {/* <p>{description}</p> */}
        {/* <ul className={styles["tech-list"]}>
          <li>HTML</li>
          <li>SASS/SCSS</li>
          <li>JS</li>
        </ul>
        <ul className={styles["link-list"]}>
          <li>
            <a href={"https://github.com/cjoak1028/planets-fact-site"}>REPO</a>
          </li>
          <li>
            <a href={"https://planets-fact-site-sand.vercel.app/"}>SITE</a>
          </li>
        </ul> */}
      </div>
      <div className={styles["project-img"]}>
        <img src={planetsImage} alt="planets website screenshot" />
      </div>
    </div>
  );
};

export default Project;
