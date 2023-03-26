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
    <>
      <Header />
      <div className="padding-x">
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <motion.div
          className={styles.prompt}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <p>Check out some of my work </p>
          <BsArrowDownShort className={styles["arrow-icon"]} />
        </motion.div>
        <Element name="projects">
          <Projects />
        </Element>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className={`${styles.prompt} ${styles["prompt--rev"]}`}
        >
          <BsArrowDownShort className={styles["arrow-icon"]} />
          <p>Get in touch </p>
        </motion.div>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
      <motion.div
        className={styles["side-element"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, transition: { delay: 2.6 } }}
      >
        <div className={styles["contact"]}>
          <p>changju.kim10@gmail.com</p>
          <span className={styles.line}></span>
        </div>
      </motion.div>
    </>
  );
}

export default App;
