import React, { useContext } from "react";
import "./search-styles.css";
import Container from "react-bootstrap/Container";
import { Context } from "../../context";
import Select from "react-select";
import { techs } from "./options";

/**
 * Function that returns a JSX search element to
 * filter job postings by role or technology
 * @function Search
 * @returns {JSX.Elements} HTML search field
 */

const Search = () => {
  const { setQuery, logued, user } = useContext(Context);
  //function that handles inputs in the search field
  const handleInput = (value = []) => {
    let values = (value || []).map((item) => item.value);
    setQuery(values);
  };

  const selectorTags = techs;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted rgba(250, 134, 105, 0.3)",
      color: state.isSelected ? "red" : "#666666",
      fontSize: "0.8rem",
      padding: 10,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className="search">
      <Container fluid="md">
        {logued && user && (
          <Select
            //defaultValue={[selectorTags[0]]}
            styles={customStyles}
            isMulti
            name="colors"
            placeholder={"Select Job title or Technology"}
            options={selectorTags}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleInput}
          />
        )}
      </Container>
    </div>
  );
};

export default Search;
