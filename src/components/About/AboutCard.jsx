import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Nayanika Mukherjee </span>
            from <span className="purple"> Durgapur, India.</span>
            <br />
            I am a pre-final year student in University Institute of Technology.
            <br />
            I am currently pursuing Bachelor in Engineering in Computer Science Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Poem Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(173,216,235,1)" }}>
            "Striving to make a difference in this world"{" "}
          </p>
          <footer className="blockquote-footer">Nayanika</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
