import React, { useContext, useState, useEffect } from "react";
import "./cards-styles.css";
import { Context } from "../../context";
import JobCard from "./card";
import Loader from "../loader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CardsJolby = () => {
  const { jobs, query } = useContext(Context);
  const [fetchedjobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobs);

    if (query.length > 0) {
      let filtered = [];

      if (jobs) {
        const entries = jobs.entries;

        filtered = entries.filter((job) => {
          const isSearched = findCommonElements(job.tags, query);
          if (isSearched) {
            return job;
          }
          return null;
        });

        setJobs({ entries: filtered });
      }
    }
  }, [jobs, query]);

  const findCommonElements = (arr1, arr2) =>
    arr1.some((item) => arr2.includes(item));

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
