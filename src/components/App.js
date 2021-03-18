import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Experience from "./Experience";

const App = () => {
  return (
    <div className="dark">
      <NavBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
