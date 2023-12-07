import React from "react";
import { Container } from "react-bootstrap";

export const Deals = () => {
  return (
    <Container fluid id="deals">
      <Container id="dealsDropdown">
        <h6>Categories</h6>
        <a href="#">Electronics</a>
        <a href="#">Mobile</a>
        <a href="#">Digital Cameras</a>
        <a href="#">Computer Accessories</a>
        <a href="#">LG</a>
        <a href="#">Oppo</a>
        <a href="#">Samsung</a>
        <a href="#">Lenovo</a>
        <a href="#">Philips</a>
        <a href="#">Gionee</a>
        <a href="#">Huawei</a>
        <a href="#">Pizzie</a>
      </Container>
      <Container id="dealsProducts"></Container>
    </Container>
  );
};
