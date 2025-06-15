import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maternal from "../../Assets/Projects/maternal.jpg"; // Updated to .jpg

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maternal} // Corrected image path
              isBlog={false}
              title="Maternal health+"
              description="BloomCare+ is a mobile app developed for the Diyagama MOH to digitalize maternal and child health services."
              ghLink="https://github.com/MohanathasThujeeban/maternal_health.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;