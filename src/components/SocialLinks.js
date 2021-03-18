// https://react-icons.github.io/react-icons/
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = ({ github, linkedin }) => {
  return (
    <>
      <div className="social-links">
        <a
          className="social-link"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="social-link"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
