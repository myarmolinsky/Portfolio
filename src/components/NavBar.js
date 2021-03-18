// https://react-bootstrap.github.io/components/navbar/
import { Nav, Navbar } from "react-bootstrap";
// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";

const NavBar = ({ theme }) => {
  return (
    <Navbar
      className={theme + " navbar"}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
    >
      <Nav className="h4">
        <Nav.Item className="navbar-item">
          <Link className="text-white" to="about" smooth={true}>
            About
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link className="text-white" to="skills" smooth={true}>
            Skills
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link className="text-white" to="projects" smooth={true}>
            Projects
          </Link>
        </Nav.Item>
        <Nav.Item className="navbar-item">
          <Link className="text-white" to="contact" smooth={true}>
            Contact
          </Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
