import React from "react";
import "./footer-styles.css";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div className="footer">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Footer;
