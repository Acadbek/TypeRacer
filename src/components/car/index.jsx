import React, { useState, useRef } from "react";
import { Car } from "../style";
const car = "https://data.typeracer.com/public/images/avatars/mobil3.svg";
const pressed = 0;
const Cars = () => {
  const input = useRef();

  const [words, setWords] = useState(["salom", "hey", "hi"]);
  const [inputVl, setInputVl] = useState("");

  const getInputVl = ({ target }) => {
    setInputVl(target.value);
    if (words.includes(inputVl)) {
      console.log(inputVl);
    }
  };

  const clearInput = (e) => {
    if (e.keyCode === 32) {
      input.current.value = "";
    }
  };

  return (
    <div>
      <Car pressed={pressed}>
        <img style={{ width: "100px" }} src={car} alt="Card" />
      </Car>
      {words.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      <input
        ref={input}
        onKeyDown={clearInput}
        type="text"
        onChange={getInputVl}
      />
    </div>
  );
};

export default Cars;
