import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; //For typing effect
import { Container } from "react-bootstrap";
import headphonesImage from "./Images/headphones.png";
import iphoneImage from "./Images/iphone.png";
import priceImage from "./Images/price.png";
import AOS from "aos"; //Import Animation On Scroll
import "aos/dist/aos.css"; //Import AOS css file
import "../CSS/home.css";

 const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  const [color, setColor] = useState("#f8e8e7");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Toggle the color between red and blue
      setColor((prevColor) =>
        prevColor === "#f8e8e7" ? "#dde9fb" : "#f8e8e7"
      );
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Purchase Gadgets & Accessories",
        "Get the best deals with us",
        "Purchase devices for your business",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true, //loop the strings
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container
      fluid
      id="home"
      style={{
        backgroundColor: color,
        transition: "background-color 1s ease-in-out", // Smooth transition
      }}
    >
      <Container id="homeCircles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </Container>
      <Container id="homeText" data-aos="zoom-in-up">
        <h1 ref={el}>Purchase Headphones & Accessories</h1>
        <p>
          At Maclectrons, we don't just sell gadgets; we curate experiences that
          redefine the way you live, work, and play. From state-of-the-art
          smartphones to intelligent home automation, our collection is a
          testament to the relentless pursuit of advancement.
        </p>
        <button>View More</button>
      </Container>
      <Container id="homeImage">
        <img src={priceImage} alt="Price" id="price" />
        <img src={headphonesImage} alt="Headphones" id="product" />
      </Container>
    </Container>
  );
};

export default Home;
