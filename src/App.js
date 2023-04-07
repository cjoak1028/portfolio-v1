import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BsArrowDownShort } from "react-icons/bs";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className="padding-x">
        <Element name="hero">
          <Hero />
        </Element>
        <div className={styles["prompt-container"]}>
          <motion.div
            className={`${styles.prompt} ${styles["prompt--rev"]}`}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <BsArrowDownShort className={styles["arrow-icon"]} />
            {/* <p>Get to know me</p> */}
          </motion.div>
          <motion.div
            className={styles.prompt}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            {/* <p>Get to know me</p> */}
            <BsArrowDownShort className={styles["arrow-icon"]} />
          </motion.div>
        </div>
        <Element name="about">
          <About />
        </Element>
        <div className={styles["prompt-container"]}>
          <motion.div
            className={`${styles.prompt} ${styles["prompt--rev"]}`}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <BsArrowDownShort className={styles["arrow-icon"]} />
            {/* <p>Check out some of my work</p> */}
          </motion.div>
          <motion.div
            className={styles.prompt}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            {/* <p>Check out some of my work</p> */}
            <BsArrowDownShort className={styles["arrow-icon"]} />
          </motion.div>
        </div>
        <Element name="projects">
          <Projects />
        </Element>
        <div className={styles["prompt-container"]}>
          <motion.div
            className={`${styles.prompt} ${styles["prompt--rev"]}`}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <BsArrowDownShort className={styles["arrow-icon"]} />
            {/* <p>Reach me</p> */}
          </motion.div>
          <motion.div
            className={styles.prompt}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            {/* <p>Reach me</p> */}
            <BsArrowDownShort className={styles["arrow-icon"]} />
          </motion.div>
        </div>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
