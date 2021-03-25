// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiHeroku,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import reactLogo from "./assets/images/reactLogo.png";
import ponkemo from "./assets/images/ponkemo.png";

export const name = "Matthew Yarmolinsky";

/* Contact Info
 ************************************************************** */
export const email = "yarmolinskymatthew@gmail.com";
export const githubUrl = "https://github.com/myarmolinsky";
export const linkedinUrl = "https://www.linkedin.com/in/matthewyarmolinsky/";

/* Skills
 ************************************************************** */
export const skillData = [
  {
    icon: <FaReact className="display-4" />,
    name: "React",
  },
  {
    icon: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    icon: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt className="display-4" />,
    name: "CSS3",
  },
  {
    icon: <FaSass className="display-4" />,
    name: "Sass",
  },
  {
    icon: <FaJava className="display-4" />,
    name: "Java",
  },
  {
    icon: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    icon: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    icon: <SiMongodb className="display-4" />,
    name: "MongoDB",
  },
  {
    icon: <FaNodeJs className="display-4" />,
    name: "Node.js",
  },
  {
    icon: <SiHeroku className="display-4" />,
    name: "Heroku",
  },
  {
    icon: <SiJest className="display-4" />,
    name: "Jest.js",
  },
  {
    icon: <SiRedux className="display-4" />,
    name: "Redux",
  },
];

/* Projects
 ************************************************************** */
export const projects = [
  {
    name: "Ponkemo-v2",
    url: "https://github.com/myarmolinsky/Ponkemo-v2",
    image: ponkemo,
    tech: [
      <FaReact className="display-4" />,
      <SiJavascript className="display-4" />,
      <FaNodeJs className="display-4" />,
      <FaHtml5 className="display-4" />,
      <FaCss3Alt className="display-4" />,
      <FaSass className="display-4" />,
      <SiMongodb className="display-4" />,
    ],
  },
  {
    name: "Dev Connector",
    url: "https://github.com/myarmolinsky/Udemy_MERN_Project",
    image: reactLogo,
    tech: [
      <FaReact className="display-4" />,
      <SiJavascript className="display-4" />,
      <FaNodeJs className="display-4" />,
      <FaHtml5 className="display-4" />,
      <FaCss3Alt className="display-4" />,
      <FaSass className="display-4" />,
      <SiMongodb className="display-4" />,
      <SiHeroku className="display-4" />,
      <SiRedux className="display-4" />,
    ],
  },
  {
    name: "Ponkemo",
    url: "https://github.com/myarmolinsky/Ponkemo",
    image: ponkemo,
    tech: [<FaJava className="display-4" />],
  },
];

/* Experiences
 ************************************************************** */
export const experiences = [
  {
    name: "Codelet",
    tech: [
      <FaReact className="display-4" />,
      <SiJavascript className="display-4" />,
      <FaHtml5 className="display-4" />,
      <FaCss3Alt className="display-4" />,
      <FaSass className="display-4" />,
      <SiMongodb className="display-4" />,
      <FaNodeJs className="display-4" />,
      <SiJest className="display-4" />,
    ],
    position: "Full Stack Software Engineer",
    timeline: "Aug 2020 - Present",
  },
  {
    name: "Brooklyn College",
    tech: [<FaJava className="display-4" />],
    position: "Java Teaching Assistant",
    timeline: "Feb 2020 - Present",
  },
  {
    name: "Nova XR Media",
    tech: [
      <FaReact className="display-4" />,
      <SiJavascript className="display-4" />,
      <FaHtml5 className="display-4" />,
      <FaCss3Alt className="display-4" />,
      <FaNodeJs className="display-4" />,
    ],
    position: "Development Intern",
    timeline: "Feb 2018 - Aug 2018",
  },
];
