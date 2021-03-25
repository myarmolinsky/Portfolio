import SocialLinks from "./SocialLinks";
import { name } from "../data";
// PFP
import pfp from "../assets/images/pfp.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="d-flex flex-column min-vh-100 justify-content-center"
    >
      <div className="container text-center">
        <img src={pfp} alt={name} />
        <h1>{name}</h1>
        <hr />
        <p>Full Stack Software Engineer</p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default About;
