// https://react-bootstrap.github.io/components/cards/#card-columns
import { CardColumns, Card } from "react-bootstrap";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center"
    >
      <div className="container">
        <h2>Experience</h2>
        <hr />
        <CardColumns>
          {experiences.map((experience, index) => (
            <Card key={index} className="experience-card">
              <Card.Header>
                <Card.Title className="d-inline-block">
                  {experience.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Title>{experience.position}</Card.Title>
              </Card.Body>
              <Card.Body>
                {experience.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </Card.Body>
              <Card.Body>{experience.timeline}</Card.Body>
            </Card>
          ))}
        </CardColumns>
      </div>
    </section>
  );
};

export default Experience;
