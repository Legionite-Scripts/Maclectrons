import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { headphonesImage } from "./Images/headphones.png";

export const Home = () => {
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
      <Container id="homeText">
        <h1>Purchase Headphones & Accessories</h1>
        <p>
          Purchase Headphones & Accessories At Maclectrons, we don't just sell
          gadgets; we curate experiences that redefine the way you live, work,
          and play. From state-of-the-art smartphones to intelligent home
          automation, our collection is a testament to the relentless pursuit of
          advancement.
        </p>
        <button>View More</button>
      </Container>
      <Container id="homeImage"></Container>
    </Container>
  );
};
