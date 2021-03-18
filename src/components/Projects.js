import React from "react";
// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card } from "react-bootstrap";
import { projects } from "../data";

const Projects = ({ theme }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center align-items-center text-center`;

  return (
    <section id="projects" className={newTheme}>
      <div className="container">
        <h2>Projects</h2>
        <hr />
        <CardColumns>
          {projects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noreferrer" key={index}>
              <Card>
                <Card.Body>
                  <img src={project.image} alt={project.name} />
                </Card.Body>
                <Card.Body>
                  <Card.Title className="d-inline-block">
                    {project.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
          ))}
        </CardColumns>
      </div>
    </section>
  );
};

export default Projects;
