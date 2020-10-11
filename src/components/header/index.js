import React from "react";
import "./header-styles.css";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
