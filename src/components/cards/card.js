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
      <div className="bg=#fa8669">
      <Card style={{ width: "18rem" }}>
        <div>
          <Card.Img variant="top" src="holder.js/100px180" />
          <p>{Time}</p>
          <Card.Title>{title || ""}</Card.Title>
          <p className="card-subtitle">{company || ""}</p>
          <p className="card-mn">{Location || ""}</p>
          <p className="card-bd">Technologies</p>
        </div>
        <div>
          {Tags.map((tag) => (
            <Button type="submit" size="sm">
              {tag}
            </Button>
          ))}
        </div>
        <div>
          <p className="card-ft">Go to the offer!</p>
          <a href={applyLink} target="blank">
            <Button variant="primary">See more</Button>
          </a>
        </div>
      </Card>
      </div>
    </div>
  );
};

export default JobCard;
