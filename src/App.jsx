import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Divider from "./components/Divider";

function App() {
  return (
    <main>
    <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <Divider />

      <section id="experience">
        <Experience />
      </section>

      <Divider />

      <section id="projects">
        <Projects />
      </section>

      <Divider />

      <section id="skills">
        <Skills />
      </section>

      <Divider />

      <section id="contact">
        <Contact />
      </section>
    
    </main>
  );
}

export default App;
