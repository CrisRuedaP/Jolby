import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import "./csv-styles.css";


/**
 * Function that returns a JSX element to download the data in csv format
 * @function Csv
 * @param { data } string
 * @returns {JSX.Elements} HTML csv
 */

const Csv = ({ data = [] }) => {
  const csvInitialData = ["company", "title", "applyLink"];
  const transformedData = [csvInitialData, ...data];

  return (
    <div className="csv">
      <CSVLink data={transformedData}>Download these offers in .CSV</CSVLink>
    </div>
  );
};

export default Csv;
