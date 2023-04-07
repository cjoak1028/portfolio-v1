import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Prompt from "./components/Prompt/Prompt";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className="padding-x">
        <Element name="hero">
          <Hero />
        </Element>
        <Prompt message={"Who am I ?"} />
        <Element name="about">
          <About />
        </Element>
        <Prompt message={"Check out some of my work"} />
        <Element name="projects">
          <Projects />
        </Element>
        <Prompt message={"changju.kim10@gmail.com"} />
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
