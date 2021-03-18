// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "./containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import pfp from "../assets/images/pfp.jpg";

const About = ({ theme, setTheme, githubUrl, linkedinUrl }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img className="pfp" src={pfp} alt="Matthew Yarmolinsky" />
        <h1>Matthew Yarmolinsky</h1>
        <hr />
        <p>Full Stack Software Engineer</p>
        <SocialLinks github={githubUrl} linkedin={linkedinUrl} />
        {/* <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link> */}
      </div>
    </header>
  );
};

export default About;
