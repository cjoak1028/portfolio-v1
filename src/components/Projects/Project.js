import React from "react";
import styles from "./Project.module.css";

const Project = ({ num, title, description, repo, link }) => {
  return (
    <div className={styles.project}>
      <p>{num}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
