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
              <p className="text__hero">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur pharetra pharetra nibh, nec consequat felis porta ac.
                Fusce sit amet augue convallis, euismod enim quis, rutrum velit.
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
