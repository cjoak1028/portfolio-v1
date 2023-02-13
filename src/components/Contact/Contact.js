import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h3>HIRE ME!</h3>
      <p>
        OR FEEL FREE TO MESSAGE ME IF YOU WANT TO COLLABORATE OR HAVE A LITTLE
        CHAT.
      </p>
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
