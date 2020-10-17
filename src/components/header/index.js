import React from "react";
import "./header-styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width={"100"} alt={"logo"} />
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <span className="header__link">
              <Link to={"/#cards-anchor"}>Find Jobs</Link>
            </span>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
