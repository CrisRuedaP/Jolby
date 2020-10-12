import React from "react";
import "./footer-styles.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Icon_copyright from "../../assets/images/copyright.png";
import Icon_heart from "../../assets/images/heart.png";
import Icon_marker from "../../assets/images/marker.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__up">
        <Nav className="justify-content-center" activeKey="/home">
          <p className="text-center mt-4 mb-4">
            Jolby By Coderise
            <br /><img className="footer__up-icon" src={Icon_marker} alt={"icon"}/>
            Medellin, Colombia
          </p>
        </Nav>
      </div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <span className="dark small">
                <img className="footer__icon-left" src={Icon_copyright} alt={"icon"} />
             Illustration Absurd Design</span>
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <p className="dark small">
                Made with  <img className="footer__icon-right" src={Icon_heart} alt={"icon"} /> by Cristina Rueda - Marisol Ramírez - David Hincapié
              </p>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
