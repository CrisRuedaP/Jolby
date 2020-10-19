import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { useScrollPosition } from "../../hooks/useTrackingScroll";
import "./list-styles.css";

const List = ({ currentJobs, cards }) => {
  const jobs = currentJobs;
  const [splitted, setSplitted] = useState([]);
  const [count, setCount] = useState(1);
  const [listItems, setListItems] = useState([]);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useEffect(() => {
    if (jobs) {
      splitArray();
    }
  }, [jobs]);

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

    percentage === 100 ? setHideOnScroll(false) : setHideOnScroll(true);
  }, [hideOnScroll]);

  const fetchMoreListItems = () => {
    if (count <= splitted.length) {
      setCount(count + 1);
    }
    if (count === splitted.length) return;

    const list = listItems.concat(splitted[count]);
    setListItems(list);
    setHideOnScroll(true);
  };

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

  return (
    <div className={"list"}>
      <Row>{listItems ? cards(listItems) : "loading"}</Row>
      {!hideOnScroll && (
        <Button
          variant="outline-secondary"
          className="list__button"
          disabled={!splitted || count === splitted.length}
          onClick={fetchMoreListItems}
        >
          {count === splitted.length ? "All offers were loaded" : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default List;
