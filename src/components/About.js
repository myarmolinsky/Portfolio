import SocialLinks from "./SocialLinks";
import { name } from "../data";
// PFP
import pfp from "../assets/images/pfp.jpg";

const About = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;

  return (
    <header id="about" className={newTheme}>
      <div className="container text-center">
        <img className="pfp" src={pfp} alt="Matthew Yarmolinsky" />
        <h1>{name}</h1>
        <hr />
        <p>Full Stack Software Engineer</p>
        <SocialLinks />
      </div>
    </header>
  );
};

export default About;
