import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

function Navigation() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">INFINITY HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLinks
                className="nav-link"
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </NavLinks>
              <NavLinks
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </NavLinks>
              <NavLinks
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </NavLinks>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/">Download Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;

const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    bordor-bottom: 3px solid #536dfe;
  }
`;
