import React from "react";
import "./search-styles.css";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Search = () => {
  return (
    <div className="search">
      <Container fluid="md">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Offer"
            aria-label="Search Offer"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    </div>
  );
};

export default Search;
