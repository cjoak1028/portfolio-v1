import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Layout/Section";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Hero />
        <Section title={"about"} rotate={true} border={false}>
          <About />
        </Section>
        <Section title={"skills"} rotate={false}>
          <Skills />
        </Section>
        <Section title={"projects"} rotate={true} border={true}>
          <div>PROJECTS</div>
        </Section>
        <Section title={"contact"} rotate={false}>
          <Contact />
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
