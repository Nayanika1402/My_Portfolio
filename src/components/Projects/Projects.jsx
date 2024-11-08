import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import weatherly from "../../assets/projects/weatherly.png";
import todo from "../../assets/projects/todo.png";
import rural from "../../assets/projects/rural.png";
import fixup from "../../assets/projects/fixup.png";
import care from "../../assets/projects/care.png";

function Projects({id}) {
  return (
    <Container fluid className="project-section" id={id}>
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
              imgPath={weatherly}
              isBlog={false}
              title="WeatherLy"
              description="This is a weather app which helps you to chcek temperature of different areas. Along with temperature it also give detailed information about various weather data."
              ghLink="https://github.com/Nayanika1402/WeatherLY"
              demoLink="https://weather-ly-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do-List"
              description="A To-Do List component is a simple yet effective tool for organizing tasks and tracking progress.It is tool made using HTML,CSS,JavaScript with extensive responsive design and user-friendly nature."
              ghLink="https://github.com/Nayanika1402/To-Do-List"
              demoLink="https://to-do-list-six-flame.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rural}
              isBlog={false}
              title="RuralRetreats"
              description="RuralRetreats is a website dedicated to connecting rural areas with travelers seeking authentic and unique experiences. The platform aims to promote rural tourism by showcasing the charm, culture, and natural beauty of less-explored regions, allowing visitors to immerse themselves in local traditions, crafts, and nature."
              ghLink="https://github.com/Nayanika1402/RuralRetreats"
              demoLink="https://rural-retreats.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fixup}
              isBlog={false}
              title="FixUp"
              description="Fixers and Installers Xtreme Utility Platform is a service appointment booking platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to book various household services like electrician, carpenter, driver, and more."
              ghLink="https://github.com/Nayanika1402/Fix-Up"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={care}
              isBlog={false}
              title="CARE"
              description="The main aim of CARE is to create a social service platform where users can offer or receive various types of social work!"
              ghLink="https://github.com/Nayanika1402/status-code1"
              demoLink="https://care-nine.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
