// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "./containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import logo from "../assets/images/logo.svg";

const About = ({ theme, setTheme, githubUrl, linkedinUrl, name, bio }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <header id="about" className={newTheme}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
        <img
          className="logo spin img-fluid"
          src={logo}
          alt="React Logo"
          height="45%"
          width="45%"
        />
        <h1>{name}</h1>
        <hr />
        <p>{bio}</p>
        <SocialLinks github={githubUrl} linkedin={linkedinUrl} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
