import React, { useState, useRef } from "react";
import { WrapperCar, Wrapper } from "../components/car/style";
import Car from "../components/car";
import { AllData } from "../context";
const carImg = "https://data.typeracer.com/public/images/avatars/mobil3.svg";

const PlayGround = () => {
  const [data] = AllData();

  const input = useRef("");
  const [pressed, setPressed] = useState(-300);
  const [words] = useState([
    "salom",
    "hey",
    "hi",
    "vey",
    "say",
    "something",
    "set",
  ]);

  const sliceText = (text) => {
    return text.split(" ")[0];
  };

  const [inputVl, setInputVl] = useState();

  const randomText = (arr) => {
    let randomNum, finalWord;
    randomNum = Math.floor(Math.random() * arr?.length);
    finalWord = arr[randomNum];
    return finalWord;
  };

  const getInputVl = ({ target }) => {
    setInputVl(target.value);
    // if (words.includes(inputVl)) {
    //   setPressed((prev) => {
    //     return prev + 40;
    //   });
    // }
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
        {randomText(
          data.map((val, idx) => <p key={idx}>{sliceText(val.title)}</p>)
        )}
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
