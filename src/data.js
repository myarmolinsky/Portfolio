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

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUrl = "https://github.com/myarmolinsky";
export const linkedinUrl = "https://www.linkedin.com/in/matthewyarmolinsky/";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
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
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = ["Ponkemo-v2", "Ponkemo"];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: colors,
  },
  {
    image: react,
  },
];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "yarmolinskymatthew@gmail.com",
  phone: "",
  mailChimp: "",
};
