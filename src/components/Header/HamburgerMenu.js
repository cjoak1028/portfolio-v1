import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./HamburgerMenu.module.css";

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.2,
    },
  },
  hidden: { opacity: 0 },
};

const navItem = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  hidden: { opacity: 0, y: 10 },
};

const HamburgerMenu = ({ open, getOpenMenu }) => {
  const menuRef = useRef(null);
  const handleMenuClick = () => {
    getOpenMenu(false);
  };

  useEffect(() => {
    if (open) {
      menuRef.current.classList.add(styles.open);
    } else {
      menuRef.current.classList.add(styles.close);
      setTimeout(() => {
        menuRef.current.classList.remove(styles.open);
        menuRef.current.classList.remove(styles.close);
      }, 400);
    }
    document.body.classList.toggle("no-scroll");
  }, [open]);

  return (
    <div ref={menuRef} className={`${styles["hamburger-menu"]} padding-x`}>
      <div className={styles["hamburger-menu__header"]}>
        <p className={styles.logo}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleMenuClick}
            className={"link"}
          >
            CJ PORTFOLIO
          </Link>
        </p>
        <button className={styles["close-button"]} onClick={handleMenuClick}>
          close
        </button>
      </div>
      <div className={styles["hamburger-menu__content"]}>
        <nav>
          <motion.ul
            className={styles["hamburger-menu__links"]}
            variants={navList}
            initial="hidden"
            whileInView="visible"
          >
            <motion.li variants={navItem}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
                className={"link"}
              >
                About
              </Link>
            </motion.li>
            <motion.li variants={navItem}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
                className={"link"}
              >
                Work
              </Link>
            </motion.li>
            <motion.li variants={navItem}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-110}
                onClick={handleMenuClick}
                className={"link"}
              >
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
        <span className={styles.divider}></span>
        <div className={styles["hamburger-menu__info"]}>
          <p>Chang-Ju (David) Kim</p>
          <p>Front-end Developer</p>
          <p>Based in Toronto</p>
          <div className={styles.email}>
            <span className={styles.line}></span>
            <p>changju.kim10@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
