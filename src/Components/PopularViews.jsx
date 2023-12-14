import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos"; //Import Animation On Scroll
import "aos/dist/aos.css"; //Import AOS css file
import earbudsImage from "./Images/earbuds.png";
import oraimoImage from "./Images/oraimo.png";
import laptopImage from "./Images/laptop.png";
import redHeadphonesImage from "./Images/redHeadphones.png";
import earphonesImage from "./Images/earphone.png";
import clockImage from "./Images/clock.png";
import clipperImage from "./Images/clipper.png";
import fridgeImage from "./Images/fridge.png";
import femaleImage from "./Images/female.png";
import cameraImage from "./Images/camera.png";
import phoneImage from "./Images/phone.png";
import blackBudsImage from "./Images/blackBuds.png";
import smartwatchImage from "./Images/smartwatch.png";
import massagerImage from "./Images/massager.png";
import toycarImage from "./Images/toycar.png";
import analogClockImage from "./Images/analogClock.png";
import curlerImage from "./Images/curler.png";
import microwaveImage from "./Images/microwave.png";
import vacuumImage from "./Images/vacuum.png";
import washingmachineImage from "./Images/washingmachine.png";

export const PopularViews = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <Container fluid id="popularViews">
      <Container fluid id="topViewsDiv">
        <h1>Popular Views</h1>
      </Container>
      <Container fluid id="popularProducts">
        {/* First Item */}
        <Container id="item" data-aos="flip-left">
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
        <Container id="item" data-aos="flip-left">
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
        <Container id="item" data-aos="flip-left">
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
        <Container id="item" data-aos="flip-left">
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
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={earphonesImage} alt="Earphones" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>UltraSound Samsung Earphones</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>600 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$3.50</h3>
          </Container>
        </Container>
        {/* Second Item */}
        <Container id="item" data-aos="flip-left">
          <img src={clockImage} alt="LED Clock" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>3D led Digital Wall Clock</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>50 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$65.99</h3>
          </Container>
        </Container>
        {/* Third Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={clipperImage} alt="clippers" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Deluxe Travel kit trimmer for Men</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>60 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$26.99</h3>
          </Container>
        </Container>
        {/* Fourth Item */}
        <Container id="item" data-aos="flip-left">
          <img src={fridgeImage} alt="Fridge" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>PanaSonic mini-sized refridgerator</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>30 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$89.00</h3>
          </Container>
        </Container>
      </Container>

      {/* We Deliver Section */}
      <Container fluid id="weDeliver">
        <Container fluid id="topViewsDiv">
          <h1>We deliver to you</h1>
        </Container>
        <Container fluid id="innerWeDeliver">
          <Container id="innerWeDeliverText" data-aos="zoom-in-up">
            <p>Awesome Discovery</p>
            <h1>Maclectrons Delivers at your door step</h1>
            <p>
              From express deliveries that satisfy your immediate needs to
              scheduled services that cater to your convenience, we've got your
              back.
            </p>
            <button className="btn btn-success">View More</button>
          </Container>
          <img src={femaleImage} alt="Girl" />
        </Container>
      </Container>

      {/* Third Section */}
      <Container fluid id="topViewsDiv">
        <h1>A must have for you</h1>
      </Container>
      <Container fluid id="popularProducts">
        {/* First Item */}
        <Container id="item" data-aos="flip-left">
          <img src={cameraImage} alt="Digital Camera" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>Sony 3D digital camera 2023 model</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>60 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$300.50</h3>
          </Container>
        </Container>
        {/* Second Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={phoneImage} alt="Samsung Phone" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Samsung Galaxy S3 ultra 6.8inches...</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>600 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$219.99</h3>
          </Container>
        </Container>
        {/* Third Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={blackBudsImage} alt="Black Earbuds" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Ultra Sound Oraimo earpiece</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>20 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$2.00</h3>
          </Container>
        </Container>
        {/* Fourth Item */}
        <Container id="item" data-aos="flip-left">
          <img src={smartwatchImage} alt="SmartWatch" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>s20 Digital Wristwatch 8 inches</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>80 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$105.00</h3>
          </Container>
        </Container>
      </Container>
      {/* Fourth Section */}
      <Container fluid id="popularProducts">
        {/* First Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={massagerImage} alt="Massager" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Lifelong LLLM8 gun massager</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>50 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$80.50</h3>
          </Container>
        </Container>
        {/* Second Item */}
        <Container id="item" data-aos="flip-left">
          <img src={toycarImage} alt="Toy Car" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>Baby battery operated toy car</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>60 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$167.99</h3>
          </Container>
        </Container>
        {/* Third Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={analogClockImage} alt="Analog Clock" />
          <Container fluid id="itemText">
            <p>In stock</p>
            <h6>Analog Wall Clock with Solar Charging</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>60 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$30.00</h3>
          </Container>
        </Container>
        {/* Fourth Item */}
        <Container id="item" data-aos="flip-left">
          <Container fluid id="freeDeliveryDiv">
            <Container id="innerFreeDelivery">
              <h6>Free Delivery</h6>
            </Container>
          </Container>
          <img src={curlerImage} alt="Hair Curler" />
          <Container fluid id="itemText">
            <p>Few Units Left</p>
            <h6>Pitch perfect hair curler for Women</h6>
          </Container>
          <Container fluid id="review">
            <Container id="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </Container>
            <p>84 reviews</p>
          </Container>
          <Container id="popularPriceDiv">
            <h3>$15.99</h3>
          </Container>
        </Container>
      </Container>
      <Container fluid id="bottomAdvertisement">
        <Container id="innerBottomAdvertisement">
          <img src={microwaveImage} alt="Microwave" />
          <Container id="advertisementText">
            <h6>LG Microwave oven</h6>
            <p>
              Elevate your kitchen efficiency with this sleek microwave for
              sale.
            </p>
          </Container>
        </Container>
        <Container id="innerBottomAdvertisement">
          <img src={vacuumImage} alt="Microwave" />
          <Container id="advertisementText">
            <h6>Vacuum Cleaner</h6>
            <p>
              Effortlessly tackle dust and debris with our powerful vacuum for
              sale.
            </p>
          </Container>
        </Container>
        <Container id="innerBottomAdvertisement">
          <img src={washingmachineImage} alt="Washine Machine" />
          <Container id="advertisementText">
            <h6>LG Washing Machine</h6>
            <p>
              Upgrade your laundry routine with our powerful washing machine for
              sale.
            </p>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
