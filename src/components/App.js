import { useState } from "react";
import { githubUrl, linkedinUrl } from "../data";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";

const App = () => {
  // Change the defualt theme below ("dark" or "light")
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Contact theme={theme} />
      <Footer githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
    </>
  );
};

export default App;
