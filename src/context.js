import React, { createContext, useState, useEffect } from "react";
import getJobs from "./services/getJobs";
import { app } from "./firebaseConfig";

// A New instace of React.createContext
export const Context = createContext();

/**
 * Function that resolve the state of the current jobs
 * @function Provider
 * @param { children } prop all the children  on the this component
 * @returns {JSX.Elements} New setup for the Provider component
 */
const Provider = ({ children }) => {
  const [jobs, setJobs] = useState();
  const [currentJobs, setCurrentJobs] = useState([]);
  const [query, setQuery] = useState([]);
  const [user, setUser] = useState(null);
  const [logued, setLogued] = useState(false);

  useEffect(() => {
    getJobs()
      .then((response) => {
        setJobs(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLogued(true);
    });
  }, []);

  const value = {
    jobs,
    query,
    currentJobs,
    setQuery,
    setCurrentJobs,
    user,
    logued,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
