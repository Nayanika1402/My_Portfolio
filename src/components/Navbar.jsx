import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
      style={{ backgroundColor: navColour ? "#f8f9fa" : "transparent" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className="d-flex"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: navColour ? "#343a40" : "#ffffff",
            textDecoration: "none",
          }}
        >
          Nayanika.
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Home
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                About
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="qualifications"  // Ensure this matches the id in Home.jsx
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Qualifications
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </ScrollLink>
            </Nav.Item>

            <Nav.Item>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={() => updateExpanded(false)}
              >
                Contact Me
              </ScrollLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
