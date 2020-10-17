import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { setDate } from "../../utils";

const JobCard = ({
  title,
  id,
  company,
  location,
  image,
  tags = [],
  time,
  applyLink,
}) => {
  return (
    <div id={`job-${id}`} className="individual-card">
      <div className="bg=#fa8669">
        <Card>
          <div id="cards-anchor">
            <div className="individual-card__header">
              <div className="individual-card__logo">
                <img src={image} alt={title} />
              </div>
              <span>
                <b>{setDate(time) || null}</b>
              </span>
            </div>
            <Card.Title>{title || ""}</Card.Title>
            <p className="card-subtitle">{company || ""}</p>
            <p className="card-mn">{location || ""}</p>
          </div>
          <b className="card-bd">Technologies:</b>
          <div className="individual-card__tags">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant="outline-dark"
                type="submit"
                size="sm"
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="individual-card__btn-container">
            <a href={applyLink} target="blank">
              <Button variant="dark" size="sm">See offer</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default JobCard;
