import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loader-styles.css";

/**
 * Function that returns a JSX loader element
 * @function Loader
 * @returns {JSX.Elements} HTML loader
 */

const Loader = () => {
  return (
    <div>
      <Spinner animation="grow" variant="light" />
    </div>
  );
};

export default Loader;
