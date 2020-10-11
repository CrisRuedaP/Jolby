import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const JobCard = ({
  title,
  id,
  company,
  Location,
  Tags = [],
  Time,
  applyLink,
}) => {
  return (
    <div id={`$job-{id}`} className="individual-card">
      <Card style={{ width: "18rem" }}>
        <div>
          <Card.Img variant="top" src="holder.js/100px180" />
          <p>{Time}</p>
          <Card.Title>{title || ""}</Card.Title>
          <p>{company || ""}</p>
          <p>{Location || ""}</p>
          <p>Technologies</p>
        </div>
        <div>
          {Tags.map((tag) => (
            <Button type="submit" size="sm">
              {tag}
            </Button>
          ))}
        </div>
        <div>
          <p>Go to the offer!</p>
          <a href={applyLink} target="blank">
            <Button variant="primary">See more</Button>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
