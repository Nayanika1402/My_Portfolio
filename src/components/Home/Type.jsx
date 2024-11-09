import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/Nayanika_Mukherjee.pdf"; // Update the path if necessary

function Type() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typewriter
        options={{
          strings: [
            "Front-End Developer",
            "Open Source Contributor",
            "UI/UX Designer",
            "Back-End Enthusiast",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <br>
      </br>
      <div style={{ marginTop: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          download="Nayanika_Mukherjee.pdf" // Specify the download filename
          style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          My Resume
        </Button>
      </div>
    </div>
  );
}

export default Type;
