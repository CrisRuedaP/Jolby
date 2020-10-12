import React from "react";
import "./header-styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width={"100"} alt={"logo"} />
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-2">
                <span className="header__link">Find Jobs</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
