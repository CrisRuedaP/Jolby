import React, { useContext, useState } from "react";
import "./header-styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/images/logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { Context } from "../../context";
import { app } from "../../firebaseConfig";

const Header = () => {
  const { user, logued } = useContext(Context);

  return (
    <div id="header" className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width={"100"} alt={"logo"} />
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            {logued && user && (
              <div className="header__user">
                <Image src={user.photoURL} roundedCircle />
                <span className="header__name">Hello {user.displayName}!</span>
              </div>
            )}
            <span className="header__link">
              <Link to={"/#cards-anchor"}>Find Jobs</Link>
            </span>
            {logued && user && (
              <span className="header__link darky">
                <a onClick={() => app.auth().signOut()} key="logout">
                  Sign Out
                </a>
              </span>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
