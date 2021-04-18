import { TitleLetter } from "components";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  flex-direction: row;
`;
const StyledTitleBox = styled.div`
  margin-top: 3rem;
`;

export const TitleBox = ({ text }) => {
  const [flipArr, setFlipArr] = useState(Array(text.length).fill(true));

  useEffect(() => void setInterval(() => flash(), 200), []);

  const flash = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    setTimeout(() => {
      flipArr[index] = false;
      setFlipArr(flipArr.slice());
      setTimeout(() => {
        flipArr[index] = true;
        setFlipArr(flipArr.slice());
      }, Math.floor(Math.random() * 10 + 50));
    }, Math.floor(Math.random() * 100 + 1500));
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
