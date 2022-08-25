import React, { createContext, useState, useEffect, useContext } from "react";

export const DataContext = createContext();
export const AllData = () => useContext(DataContext);

const Context = ({ children }) => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setRes(data.slice(0, 100));
      });
  }, []);

  return (
    <DataContext.Provider value={[res, setRes]}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
