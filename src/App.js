import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Layout/Section";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Hero />
        <Section title={"01/ about"} rotate={true}>
          <About />
        </Section>
        <Section title={"02/ skills"} rotate={false}>
          <Skills />
        </Section>
        <Section title={"03/ projects"} rotate={true}>
          <div>PROJECTS</div>
        </Section>
      </div>
    </div>
  );
}

export default App;
