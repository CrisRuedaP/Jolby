import React, { useContext, useState, useEffect } from "react";
import "./cards-styles.css";
import { Context } from "../../context";
import JobCard from "./card";
import Loader from "../loader";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import List from "../List";

const CardsJolby = () => {
  const { jobs, query, user, logued } = useContext(Context);
  const [fetchedjobs, setJobs] = useState();

  useEffect(() => {
    setJobs(jobs);

    if (query.length > 0) {
      let filtered = [];

      if (jobs) {
        const entries = jobs;

        filtered = entries.filter((job) => {
          const isSearched = findCommonElements(job.tags, query);
          if (isSearched) {
            return job;
          }
          return null;
        });

        setJobs(filtered);
      }
    }
  }, [jobs, query]);

  const findCommonElements = (arr1, arr2) =>
    arr1.some((item) => arr2.includes(item));

  const renderCards = (entries) =>
    (entries || []).map((job, index) => (
      <Col key={index} xs="12" lg="4">
        <JobCard {...job} />
      </Col>
    ));

  const renderLoader = () => <Loader />;

  return (
    <>
      {logued && user ? (
        <div className="cards">
          {fetchedjobs ? (
            <List currentJobs={fetchedjobs} cards={renderCards} />
          ) : (
            renderLoader()
          )}
        </div>
      ) : (
        <Alert variant={"info"}>Please sign up to see the offers!</Alert>
      )}
    </>
  );
};

export default CardsJolby;
