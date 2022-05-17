import { TitleLetter } from "components";
import React, { useEffect, useState } from "react";
import { StyledTitle, StyledTitleBox } from "./TitleBoxStyles";

export const TitleBoxLetterFlash = ({ text }) => {
  const [flipArr, setFlipArr] = useState(Array(text.length).fill(true));

  // useEffect(() => void setInterval(() => flash(), 170), []);

  const flash = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    setTimeout(() => {
      flipArr[index] = false;
      setFlipArr(flipArr.slice());
      setTimeout(() => {
        flipArr[index] = true;
        setFlipArr(flipArr.slice());
      }, Math.floor(Math.random() * 10 + 30));
    }, Math.floor(Math.random() * 400 + 1400));
  };

  return (
    <StyledTitleBox>
      <StyledTitle>
        {text?.split("").map((letter, key) => {
          return <TitleLetter key={key} letter={letter} isOn={flipArr[key]} />;
        })}
      </StyledTitle>
    </StyledTitleBox>
  );
};
