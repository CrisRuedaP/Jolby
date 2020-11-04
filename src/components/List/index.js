import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import { useScrollPosition } from "../../hooks/useTrackingScroll";
import { Context } from "../../context";
import IconArrow from "../../assets/images/upward-arrow.png";
import { HashLink as Link } from "react-router-hash-link";
import "./list-styles.css";


/**
 * Function that returns a JSX element to show the first list
 * of offers and the scrolling to the next ones.
 * @function List
 * @param { currentJobs } array
 * @param { cards } string
 * @returns {JSX.Elements} HTML list
 */

const List = ({ currentJobs, cards }) => {
  const { query } = useContext(Context);
  const jobs = currentJobs;
  const [splitted, setSplitted] = useState([]);
  const [count, setCount] = useState(1);
  const [listItems, setListItems] = useState([]);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  const isNotSplitted = splitted.length === 0 || splitted.length === 1;

  useEffect(() => {
    if (jobs) {
      splitArray();
    }
  }, [jobs]);

  useEffect(() => {
    if (query.length === 0) {
      setCount(1);
    }
  }, [query]);

  /*Function to get the current percentage of the
  vertical scroll bar that a user has moved through*/
  const getScrollPercent = () => {
    const h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    const result =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    return Math.trunc(result);
  };

  useScrollPosition(() => {
    const percentage = getScrollPercent();

    percentage > 85 ? setHideOnScroll(false) : setHideOnScroll(true);
  }, [hideOnScroll]);


  //Function to display the following list of offers
  const fetchMoreListItems = () => {
    if (count <= splitted.length) {
      setCount(count + 1);
    }
    if (count === splitted.length) return;

    const list = listItems.concat(splitted[count]);
    setListItems(list);
    setHideOnScroll(true);
  };

  //Function to split the offers into arrays of 12 elements
  const splitArray = () => {
    const chunkSize = 12;
    const arr = jobs ? jobs : [];
    const groups = arr
      .map((e, i) => {
        return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
      })
      .filter((e) => {
        return e;
      });
    setSplitted(groups);
    setListItems(groups[0]);
  };

  const renderMessage = (message, variant) => (
    <Alert variant={variant}>{message}</Alert>
  );

  return (
    <div className={"list"}>
      <Row>
        {listItems
          ? cards(listItems)
          : renderMessage("No offers available.", "warning")}
      </Row>
      <div className={"list__btn-container"}>
        {!hideOnScroll && !isNotSplitted && (
          <>
            <Button
              variant="outline-secondary"
              className="list__button"
              disabled={!splitted || count === splitted.length}
              onClick={fetchMoreListItems}
            >
              {count === splitted.length
                ? "All offers were loaded"
                : "Load More"}
            </Button>
            <div className={"list__scroll-up"}>
              <Link to={"/#header"}>
                <img src={IconArrow} alt="Icon-scrool-up" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default List;
