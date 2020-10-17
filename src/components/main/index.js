import React from "react";
import "./main-styles.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../../assets/images/light.png";

const Main = () => {
  return (
    <div className="main">
      <Jumbotron>
        <Container>
          <Row>
            <Col xs lg="6">
              <h2 className="title__hero">Jobs for Holbies!</h2>
              <p className="text__hero">
                The platform to find remote jobs that match perfect with your
                profile. Created with love by your peers from Holberton
                Medellin.
              </p>
            </Col>
            <Col xs lg="6">
              <div className="main__banner">
                <img src={Banner} alt={"ilustration"} />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Main;
