import "./app.scss";

import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skill/Skill";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section id="Contact"></section>
    </div>
  );
};

export default App;
