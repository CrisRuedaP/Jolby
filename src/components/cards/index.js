import React, { useContext, useState, useEffect } from "react";
import "./cards-styles.css";
import { Context } from "../../context";
import JobCard from "./card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardsJolby = () => {
  const { jobs } = useContext(Context);
  const [fetchedjobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobs);
  }, [jobs]);

  const renderCards = ({ entries }) =>
    (entries || []).map((job) => (
      <Col xs lg="4">
        <JobCard {...job} />
      </Col>
    ));

  return (
    <div className="cards">
      <Row>{fetchedjobs ? renderCards(fetchedjobs) : "rom"}</Row>
    </div>
  );
};

export default CardsJolby;
