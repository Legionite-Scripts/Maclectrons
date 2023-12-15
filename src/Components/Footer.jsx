import React from "react";
import { Container } from "react-bootstrap";
import "../CSS/footer.css";

const Footer = () => {
  return (
    <Container fluid id="footer">
      <Container fluid id="footerLinks">
        <Container id="innerFooterLinks">
          <h4>Our Company</h4>
          <a href="#">Team</a>
          <a href="#">Privacy and Terms</a>
          <a href="#">Vision</a>
          <a href="#">Located Offices</a>
          <a href="#">Careers</a>
        </Container>
        <Container id="innerFooterLinks">
          <h4>Get to know us</h4>
          <a href="#">Career</a>
          <a href="#">Privacy and Terms</a>
          <a href="#">Mission</a>
          <a href="#">Legionite</a>
        </Container>
        <Container id="innerFooterLinks">
          <h4>Get in touch</h4>
          <a href="#">Customer Support</a>
          <a href="#">Your Order</a>
          <a href="#">Shipping</a>
          <a href="#">Manage your content</a>
          <a href="#">Goods enquiry</a>
        </Container>
        <Container id="innerFooterLinks">
          <h4>Follow us</h4>
          <Container fluid id="footerIcons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </Container>
          <a href="#">contact us via mail on Maclectrons@gmail.com</a>
        </Container>
      </Container>
      <hr />
      <p id="copyright">© copyright 2023</p>
    </Container>
  );
};
 export default Footer;