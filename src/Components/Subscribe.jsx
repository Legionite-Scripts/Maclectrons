import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import blackwomanImage from "./Images/blackWoman.png";
import "../CSS/subscribe.css";

export const Subscribe = () => {
  return (
    <Container fluid id="subscribe">
      <Container fluid id="innerSubscribe">
        <Container id="innerSubscribeText">
          <p>Stay up to date!</p>
          <h1>Subscribe To our News Letter</h1>
          <p>
            Stay in the loop with our newsletter for the latest updates,
            exclusive offers, and exciting news!
          </p>
          <button className="btn btn-success">View More</button>
        </Container>
        <img src={blackwomanImage} alt="Woman" />
      </Container>
    </Container>
  );
};

