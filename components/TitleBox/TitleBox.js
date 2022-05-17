import { TitleLetter } from "components";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  flex-direction: row;
`;
const StyledTitleBox = styled.div`
  margin-top: 4rem;
  /* @media (max-width: 900px) {
    margin-top: 3.5rem;
  } */
  /* @media (max-height: 500px) {
    font-size: 2.2rem;
  } */
  /* @media (max-width: 700px) {
    font-size: 2.5rem;
  } */
`;

export const TitleBox = ({ text }) => {
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
      <Title>
        {text?.split("").map((letter, key) => {
          return <TitleLetter key={key} letter={letter} isOn={flipArr[key]} />;
        })}
      </Title>
    </StyledTitleBox>
  );
};
