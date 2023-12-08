import React from "react";
import { Container } from "react-bootstrap";
import joystickImage from "./Images/joystick.png";
import childImage from "./Images/child.png";

export const Kids = () => {
  return (
    <Container fluid id="kids">
      <Container id="innerKids">
        <Container id="kidsText">
          <h1>Maclectrons Kids</h1>
          <p>
            Step into the enchanting world of kids' virtual kit, where every
            discovery...
          </p>
          <button>View More</button>
        </Container>
        <img src={joystickImage} alt="Joystick" />
      </Container>
      <Container id="innerKids">
        <Container id="kidsText">
          <h1>Deals</h1>
          <p>
            Get ready to embark on a journey of cutting-edge technology and...
          </p>
          <button>View More</button>
        </Container>
        <img src={childImage} alt="Joystick" />
      </Container>
    </Container>
  );
};
