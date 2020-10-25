import React from "react";
import { Context } from "../../context";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download.png";
import check from "../../assets/images/check.png";
import "./info-styles.css";

const Info = () => {
  return (
    <div className="info">
      <Row>
        <Col xs="12" lg="4">
          <Card border="dark" bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img src={search} alt="icon" />
              <Card.Title>Search by role or technology.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card border="dark" bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img src={download} alt="icon" />
              <Card.Title>
                Do not lose sight of the offers. Download them!
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card border="dark" bg="light" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Img src={check} alt="icon" />
              <Card.Title>Find a remote job you'll love. Just login!</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
