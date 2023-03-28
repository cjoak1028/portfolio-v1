import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import HamburgerMenu from "./HamburgerMenu";

const header = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
  hidden: { opacity: 0 },
};

const logo = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const navList = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 160,
    },
  },
  hidden: { opacity: 0, y: 10 },
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (!openMenu) {
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
    }
  }, [openMenu]);

  const handleMenuClick = () => {
    setOpenMenu(true);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={header}
      className={`${styles.header} padding-x flex flex-jc-sb flex-ai-c`}
    >
      <motion.p className={styles.logo} variants={logo}>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className={"link"}
        >
          CJ PORTFOLIO
        </Link>
      </motion.p>
      <nav className={styles.navigation}>
        <motion.ul variants={navList}>
          <motion.li variants={navItem}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              className={`${styles.underline} link`}
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={navItem}>/</motion.li>
          <motion.li variants={navItem}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              className={`${styles.underline} link`}
            >
              Work
            </Link>
          </motion.li>
          <motion.li variants={navItem}>/</motion.li>
          <motion.li variants={navItem}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-110}
              className={`${styles.underline} link`}
            >
              Contact
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
      <button
        className={`${styles["hamburger-button"]} ${
          isButtonDisabled ? styles.disabled : ""
        }`}
        onClick={handleMenuClick}
      >
        menu
      </button>
      <HamburgerMenu
        open={openMenu}
        getOpenMenu={(open) => setOpenMenu(open)}
      />
    </motion.div>
  );
};

export default Header;
