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
import { SiJavascript } from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";

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
    icon: <FaNodeJs className="display-4" />,
    name: "Node.js",
  },
];

/* Projects
 ************************************************************** */
export const filteredProjects = ["Ponkemo-v2", "Ponkemo"];

export const projectData = [
  {
    image: colors,
  },
  {
    image: react,
  },
];
