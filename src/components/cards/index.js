import React, { useContext, useState, useEffect } from "react";
import "./cards-styles.css";
import { Context } from "../../context";
import JobCard from "./card";
import Loader from "../loader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardsJolby = () => {
  const { jobs } = useContext(Context);
  const [fetchedjobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobs);
  }, [jobs]);

  const renderCards = ({ entries }) =>
    (entries || []).map((job, index) => (
      <Col key={index} xs lg="4">
        <JobCard {...job} />
      </Col>
    ));

  const renderLoader = () => <Loader />;

  return (
    <div className="cards">
      <Row>{fetchedjobs ? renderCards(fetchedjobs) : renderLoader()}</Row>
    </div>
  );
};

export default CardsJolby;
