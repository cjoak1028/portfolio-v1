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
      staggerChildren: 0.2,
      delay: 0.2,
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
        <motion.div
          className={styles["contact__content"]}
          variants={contactEl}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* <motion.p
            variants={contactEl}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Feel free to message me if you want to collaborate or have a little
            chat.
          </motion.p> */}
          <motion.span
            className={styles.divider}
            variants={contactEl}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          ></motion.span>
          <motion.ul
            className={styles["link-list"]}
            variants={linksList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li variants={linksItem}>
              <button
                onClick={(e) => {
                  window.location.href = "mailto:changju.kim10@gmail.com";
                  e.preventDefault();
                }}
              >
                Email
              </button>
            </motion.li>
            <motion.li variants={linksItem}>
              <a
                href={"https://linkedin.com/in/chang-ju-kim-966351255"}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </motion.li>
            <motion.li variants={linksItem}>
              <a
                href={"https://github.com/cjoak1028"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </motion.li>
            <motion.li variants={linksItem}>
              <a href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
