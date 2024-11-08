import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/projects/Nayanika_img.jpg";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Qualifications from "../Qualifications/Qualifications";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> NAYANIKA MUKHERJEE </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 85 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%", // Make the image circular
                  objectFit: "cover", // Ensures the image fits within the circle
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Add id for scroll using prop */}
      <About id="about" />
      <Qualifications id="qualifications" />
      <Projects id="projects" />
      <Contact id="contact" />
    </section>
  );
}

export default Home;
