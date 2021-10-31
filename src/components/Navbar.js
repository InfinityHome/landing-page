import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";

// RiContactsLine, MdOutlineFeaturedPlayList

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // closeMobileMenu();
  // showButton();

  return (
    <>
      <div className="Navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            INFINITY HOME
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Contact Us
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/download" className="btn-link">
                  <Button buttonStyle="btn--outline">Download Now</Button>
                </Link>
              ) : (
                <Link to="/download" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Download Now
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
