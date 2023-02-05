import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section from "./components/Layout/Section";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="padding-x">
        <Hero />
        <Section title={"01/ about"}>
          <About />
        </Section>
      </div>
    </div>
  );
}

export default App;
