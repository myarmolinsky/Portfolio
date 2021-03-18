// https://react-bootstrap.github.io/components/navbar/
import { Nav, Navbar } from "react-bootstrap";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" fixed="top" expand="lg">
      <Nav className="h4">
        <Nav.Item className="navbar-item">
          <Link
            className="text-white"
            to="about"
            smooth={true}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link
            className="text-white"
            to="skills"
            smooth={true}
            spy={true}
            activeClass="active"
          >
            Skills
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link
            className="text-white"
            to="experience"
            smooth={true}
            spy={true}
            activeClass="active"
          >
            Experience
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link
            className="text-white"
            to="projects"
            smooth={true}
            spy={true}
            activeClass="active"
          >
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link
            className="text-white"
            to="contact"
            smooth={true}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
