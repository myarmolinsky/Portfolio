// https://react-icons.github.io/react-icons/
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { githubUrl, linkedinUrl } from "../data";

const SocialLinks = () => {
  return (
    <>
      <div className="social-links">
        <a
          className="social-link"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="social-link"
          href={linkedinUrl}
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
