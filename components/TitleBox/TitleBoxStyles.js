import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";

const moving = keyframes`
  from {transform: translateX(-150%)}
  to {transform: translateX(150%)}
`;
const flashing = keyframes`
   0% {
        opacity: 1;
    }
    49% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    99% {
        opacity: 0;
    }
`;

export const StyledTitle = styled(animated.h1)`
  display: flex;
  flex-direction: row;
  font-size: 3.5rem;
`;
export const StyledTitleBox = styled.div`
  margin-top: 4rem;
  animation: ${flashing} 0.1s infinite;
  /* overflow: hidden; */
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

export const StyledTransformingTitle = styled(animated.h1)`
  animation: ${moving} 12s infinite linear reverse;
  font-size: 3.7rem;
`;
