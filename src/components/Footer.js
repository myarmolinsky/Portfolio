import SocialLinks from "./SocialLinks";

const Footer = ({ githubUrl, link, twitter }) => {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
      <SocialLinks githubUrl={githubUrl} link={link} twitter={twitter} />
      <p className="lead my-3 text-white">
        Copyright &copy; 2021{" "}
        <a
          id="myInfo"
          href="https://github.com/myarmolinsky/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Matthew Yarmolinsky
        </a>
        , Copyright &copy; 2020-2021{" "}
        <a
          id="myInfo"
          href="https://github.com/mshuber1981/github-react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Michael Huber
        </a>
      </p>
    </footer>
  );
};

export default Footer;
