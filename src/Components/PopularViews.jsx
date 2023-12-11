import React from "react";
import { Container } from "react-bootstrap";
import earbudsImage from "./Images/earbuds.png";
import oraimoImage from "./Images/oraimo.png";
import laptopImage from "./Images/laptop.png";
import redHeadphonesImage from "./Images/redHeadphones.png";

export const PopularViews = () => {
  return (
    <Container fluid id="popularViews">
      <Container fluid id="topViewsDiv">
        <h1>Popular Views</h1>
      </Container>
      <Container fluid id="popularProducts">
        {/* First Item */}
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
          <Container id="popularPriceDiv">
            <h3>$87.99</h3>
          </Container>
        </Container>
        {/* Second Item */}
        <Container id="item">
          <img src={oraimoImage} alt="mp4" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Oraimo mp4 Bluetoooth player</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>37 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$29.99</h3>
          </Container>
        </Container>
        {/* Third Item */}
        <Container id="item">
          <img src={laptopImage} alt="Laptop" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>11th Generation HP Laptop corei7</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>476 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$376.99</h3>
          </Container>
        </Container>
        {/* Fourth Item */}
        <Container id="item">
          <img src={redHeadphonesImage} alt="Headphones" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Oraimo Red Boys Headphones</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>177 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$134.86</h3>
          </Container>
        </Container>
      </Container>
      {/* SECOND SECTION */}
      {/*  */}
      {/*  */}
      <Container fluid id="topViewsDiv">
        <h1>Our Top Sellers</h1>
      </Container>
      <Container fluid id="popularProducts">
        {/* First Item */}
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
          <Container id="popularPriceDiv">
            <h3>$87.99</h3>
          </Container>
        </Container>
        {/* Second Item */}
        <Container id="item">
          <img src={oraimoImage} alt="mp4" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Oraimo mp4 Bluetoooth player</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>37 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$29.99</h3>
          </Container>
        </Container>
        {/* Third Item */}
        <Container id="item">
          <img src={laptopImage} alt="Laptop" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>11th Generation HP Laptop corei7</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>476 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$376.99</h3>
          </Container>
        </Container>
        {/* Fourth Item */}
        <Container id="item">
          <img src={redHeadphonesImage} alt="Headphones" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Oraimo Red Boys Headphones</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>177 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$134.86</h3>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
