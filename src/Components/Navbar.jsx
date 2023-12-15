import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for sidenav
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
// CSS import
import "../CSS/navbar.css";

const Navigationbar = () => {
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
            <a href="#" id="link" style={{ fontWeight: 700 }}>
              All
            </a>
            <a href="#deals" id="link">Latest Deals</a>
           <a href="#popularViews" id="link">Gift Cards</a>
           <a href="#kids" id="link">Bonanza</a>

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
export default Navigationbar;