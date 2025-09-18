import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/achievements";

function App() {
  return (
    <main>
    <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="skills">
        <Achievements />
      </section>

      <section id="contact">
        <Contact />
      </section>
    
    </main>
  );
}

export default App;
