import React, { createContext, useState, useEffect, useContext } from "react";

export const DataContext = createContext();
export const AllData = () => useContext(DataContext);

const Context = ({ children }) => {
  const [res, setRes] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const res = data.slice(0, 10);
        setRes(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={[res, setRes]}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
