import React from "react";
import { Container } from "react-bootstrap";
import tvImage from "./Images/dealsTV.png";

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
      <Container id="dealsProducts">
        <Container fluid id="topDealsDiv">
          <h6>
            Brand new Smart TV starts at just <span>$800</span>
          </h6>
        </Container>
        <Container id="middleDealsDiv">
          <Container id="middleDealsText">
            <h6 style={{ fontWeight: 700, color: "#1e1e1e" }}>
              HDMI 1920X1080
            </h6>
            <h1 id="normalDealsText">Super Smart HD TV</h1>
            <h1 id="boldDealsText">
              <span>
                <i className="fa-solid fa-scissors"></i> Flat 50%
              </span>{" "}
              off on $100 purchases
            </h1>
          </Container>
          <Container id="middleDealsImage">
            <img src={tvImage} alt="Product" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
