import React, { useState, useRef } from "react";
import { WrapperCar, Wrapper } from "../components/car/style";
import Car from "../components/car";
const carImg = "https://data.typeracer.com/public/images/avatars/mobil3.svg";

const PlayGround = () => {
  const input = useRef("");
  const [pressed, setPressed] = useState(-300);
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
      // setInputVl("");
    }
  };

  return (
    <div>
      <WrapperCar pressed={pressed}>
        <Car img={carImg} />
      </WrapperCar>
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

export default PlayGround;
