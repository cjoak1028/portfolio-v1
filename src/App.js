import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Layout/Section";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Hero />
        <Section name={"about"} title={"about"} rotate={false} border={false}>
          <About />
        </Section>
        <Section
          name={"projects"}
          title={"projects"}
          rotate={false}
          border={false}
        >
          <Projects />
        </Section>
        {/* <Section name={"contact"} title={""} rotate={false} border={false}>
          <Contact />
        </Section> */}
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
