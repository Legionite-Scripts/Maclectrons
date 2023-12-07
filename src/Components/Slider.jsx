import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import sliderPerson from "./Images/sliderPerson.jfif";
import sliderBox from "./Images/sliderBox.png";
import sliderPot from "./Images/sliderPot.png";
import sliderHeadphones from "./Images/sliderHeadphones.png";

export const Slider = () => {
  return (
    <Container fluid id="slider">
      <Container id="innerSliderContainer">
        <img src={sliderPerson} alt="Person" />
        <Container id="innerSliderText">
          <h4>Hi, User</h4>
          <p>Check out items recommended for you.</p>
        </Container>
      </Container>
      <Container id="innerSliderContainer">
        <img src={sliderBox} alt="Person" />
        <Container id="innerSliderText">
          <h4>Your Order</h4>
          <p>Check out items recommended for you.</p>
        </Container>
      </Container>
      <Container id="innerSliderContainer">
        <img src={sliderPot} alt="Person" />
        <Container id="innerSliderText">
          <h4>Home & Kitchen</h4>
          <p>Electric kitchen appliances.</p>
        </Container>
      </Container>
      <Container id="innerSliderContainer">
        <img src={sliderHeadphones} alt="Person" />
        <Container id="innerSliderText">
          <h4>Electronic Gadgets</h4>
          <p>View electronics picked for you.</p>
        </Container>
      </Container>
    </Container>
  );
};
