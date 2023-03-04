import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Layout/Section";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import { BsArrowDownShort } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Hero />
        <Section name={"about"} title={"about"} rotate={false} border={false}>
          <About />
        </Section>
        <div className={styles.transition}>
          <p>Check out some of my work </p>
          <BsArrowDownShort className={styles["arrow-icon"]} />
        </div>
        <Section
          name={"projects"}
          title={"projects"}
          rotate={false}
          border={false}
        >
          <Projects />
        </Section>
        <Contact />
      </div>
      <Footer />
      <div className={styles["side-element"]}>
        <div className={styles["contact"]}>
          <p>changju.kim10@gmail.com</p>
          <span className={styles.line}></span>
        </div>
      </div>
    </div>
  );
}

export default App;
