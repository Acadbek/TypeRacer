import React, { useState, useRef } from "react";
import { Car, Wrapper } from "../style";
const car = "https://data.typeracer.com/public/images/avatars/mobil3.svg";
const Cars = () => {
  const input = useRef("");

  const [pressed, setPressed] = useState(-500);
  const [words, setWords] = useState([
    "salom",
    "hey",
    "hi",
    "vey",
    "say",
    "something",
    "set",
  ]);
  const [inputVl, setInputVl] = useState();

  const getInputVl = ({ target }) => {
    setInputVl(target.value);
    if (words.includes(inputVl)) {
      setPressed((prev) => {
        return prev + 40;
      });
    }
  };

  const clearInput = (e) => {
    if (e.keyCode === 32) {
      input.current.value = "";
      setInputVl("");
    }
  };

  return (
    <div>
      <Car pressed={pressed}>
        <img style={{ width: "100px" }} src={car} alt="Card" />
      </Car>
      <Wrapper>
        {words.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Wrapper>
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
