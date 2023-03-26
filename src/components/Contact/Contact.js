import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import Section from "../Layout/Section";

const contactEl = {
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.2 },
  },
  hidden: {
    opacity: 0,
  },
};

const linksList = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: { opacity: 0 },
};

const linksItem = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
    },
  },
  hidden: { opacity: 0, y: 10 },
};

const Contact = () => {
  return (
    <Section name={"contact"} title={"contact"}>
      <div className={`${styles.contact}`}>
        <div className={styles["contact__content"]}>
          <motion.h3
            variants={contactEl}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            HIRE ME
          </motion.h3>
          <motion.p
            variants={contactEl}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            or feel free to message me if you want to collaborate or have a
            little chat.
          </motion.p>
          <span className={styles.divider}></span>
          <motion.ul
            className={styles["link-list"]}
            variants={linksList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={linksItem}>
              <a>Email</a>
            </motion.li>
            <motion.li variants={linksItem}>
              <a href={"https://linkedin.com/in/chang-ju-kim-966351255"}>
                LinkedIn
              </a>
            </motion.li>
            <motion.li variants={linksItem}>
              <a href={"https://github.com/cjoak1028"}>Github</a>
            </motion.li>
            <motion.li variants={linksItem}>
              <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
