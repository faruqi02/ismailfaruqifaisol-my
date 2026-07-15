import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa"; // import icons
import { Link } from "react-router-dom";

const MyNavbar = ({ theme, toggleTheme }) => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
      expand="lg"
      bg={theme === "light" ? "light" : "dark"}
      variant={theme === "light" ? "light" : "dark"}
      sticky="top"
    >
      <Container>
        {/* <Navbar.Brand as={Link} to="/">🏁</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeMenu}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={closeMenu}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
              Contact
            </Nav.Link>

            {/* Dark/Light Icon Toggle */}
            <Nav.Link
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              style={{ cursor: "pointer", fontSize: "1.2rem", marginLeft: "15px" }}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
