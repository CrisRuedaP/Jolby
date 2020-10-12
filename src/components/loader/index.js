import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loader-styles.css";

const Loader = () => {
  return (
    <div>
      <Spinner animation="grow" variant="light" />
    </div>
  );
};

export default Loader;
