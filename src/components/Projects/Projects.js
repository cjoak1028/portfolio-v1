import React from "react";
import styles from "./Projects.module.css";
import Project from "./Project";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Project
        num={1}
        title={"The Planets"}
        description={
          "A multi-page website that showcases each planet in our solar system"
        }
        repo={""}
        link={""}
      />
    </div>
  );
};

export default Projects;
