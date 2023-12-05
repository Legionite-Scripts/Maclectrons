import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for sidenav
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export const Navigationbar = () => {
  return (
    <Navbar expand="lg" id="navbar">
      <Container id="separationOne">
        <Navbar.Brand href="/" id="first">
          Maclectrons
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggleBtn" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Navbar.Brand href="/" id="second">
              Maclectrons
            </Navbar.Brand>
            <Link to="/" id="link" style={{ fontWeight: 700 }}>
              All
            </Link>
            <Link to="/features" id="link">
              Latest Deals
            </Link>
            <Link to="/pages" id="link">
              Gift Cards
            </Link>
            <Link to="/portfolio" id="link">
              Bonanza
            </Link>
            {/* <Link to="/contact" id="link">
            Contact Us
          </Link> */}
            <Container id="innerSeparationTwoHiddenIcons">
              <input type="text" placeholder="Search" id="navSearchBar" />
              <i className="fa-solid fa-person"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Container id="separationTwo">
        <input type="text" placeholder="Search" id="navSearchBar" />
        <i className="fa-solid fa-person"></i>
        <i className="fa-solid fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </Container>
    </Navbar>
  );
};
