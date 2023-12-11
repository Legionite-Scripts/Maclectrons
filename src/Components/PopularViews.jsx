import React from "react";
import { Container } from "react-bootstrap";
import earbudsImage from "./Images/earbuds.png";

export const PopularViews = () => {
  return (
    <Container fluid id="popularViews">
      <Container fluid id="topViewsDiv">
        <h1>Popular Views</h1>
      </Container>
      <Container fluid id="popularProducts">
        <Container id="item">
          <img src={earbudsImage} alt="Buds" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Philips Hair Blow Dryer 605WTZ</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>86 reviews</p>
          </Container>
        </Container>
        <Container id="item"></Container>
        <Container id="item"></Container>
        <Container id="item"></Container>
      </Container>
    </Container>
  );
};
