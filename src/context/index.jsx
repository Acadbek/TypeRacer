import React, { useEffect, useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://wordsapiv1.p.mashape.com/words")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      });
  };

  useEffect(() => {
    getData();
  }, [data]);

  return <DataContext.Provider>{children}</DataContext.Provider>;
};

export default Context;
