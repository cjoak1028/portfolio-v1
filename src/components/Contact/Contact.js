import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={`${styles.contact} padding-x`}>
      <h3>HIRE ME!</h3>
      <p>
        or feel free to message me if you want to collaborate or have a little
        chat.
      </p>
      <span className={styles.divider}></span>
      <ul className={styles["link-list"]}>
        <li>
          <a>Email</a>
        </li>
        <li>
          <a href={"https://linkedin.com/in/chang-ju-kim-966351255"}>
            LinkedIn
          </a>
        </li>
        <li>
          <a href={"https://github.com/cjoak1028"}>Github</a>
        </li>
        <li>
          <a href={""}>Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
