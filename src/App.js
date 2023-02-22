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
        <Section title={"about"} rotate={true} border={true}>
          <About />
        </Section>
        <Section title={"projects"} rotate={true} border={true}>
          <Projects />
        </Section>
        <Section title={"contact"} rotate={false} border={true}>
          <Contact />
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
