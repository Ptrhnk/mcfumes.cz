import React from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

const StyledLetter = styled(animated.h2)`
  opacity: ${({ show }) => (show ? "1" : "0")};
  min-width: 1rem;
  font-size: 3.5rem;
  letter-spacing: 1.5px;
  transition: opacity 70ms;
`;

export const TitleLetter = ({ letter, isOn }) => {
  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 20,
      mass: 1,
    },
    opacity: isOn ? "1" : "0",
  });

  return <StyledLetter show={isOn}>{letter}</StyledLetter>;
};
