import React from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "./Button";
// import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

// RiContactsLine, MdOutlineFeaturedPlayList

function Navigation() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // closeMobileMenu();
  // showButton();

  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">INFINITY HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/">Features</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
