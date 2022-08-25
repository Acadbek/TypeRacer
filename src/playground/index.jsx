import React, { useState, useRef } from "react";
import { WrapperCar, Wrapper, Text, Input } from "../components/car/style";
import Car from "../components/car";
import { data } from "../mock";
// import { AllData } from "../context";
const carImg = "https://data.typeracer.com/public/images/avatars/mobil3.svg";

const PlayGround = () => {
  // const [data] = AllData();

  const input = useRef("");
  const [pressed, setPressed] = useState(-400);
  const [completed, setCompleted] = useState(false);
  const [words, setWords] = useState(data);
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

  const clearInput = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      words.forEach((t) => {
        t.split(" ").forEach((e) => {
          if (e === inputVl) {
            setPressed((prev) => {
              return prev + 40;
            });
            setCompleted(true);
          }
        });
      });
      input.current.value = "";
    }
  };

  return (
    <div>
      <WrapperCar pressed={pressed}>
        <Car img={carImg} />
      </WrapperCar>
      <Wrapper>
        {words.map((val, idx) => (
          <Text completed={completed} key={idx}>
            {val}
          </Text>
        ))}
      </Wrapper>
      <Input	
        style={{ marginTop: "10px" }}
        ref={input}
        onKeyDown={clearInput}
        type="text"
        onChange={({ target }) => setInputVl(target.value.trim())}
      />
    </div>
  );
};

export default PlayGround;
