import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import Section from "../Layout/Section";

const Contact = () => {
  return (
    <Section name={"contact"} title={"contact"}>
      <div className={`${styles.contact}`}>
        <div className={styles["contact__content"]}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            HIRE ME
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            or feel free to message me if you want to collaborate or have a
            little chat.
          </motion.p>
          <span className={styles.divider}></span>
          <motion.ul
            className={styles["link-list"]}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
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
              <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
