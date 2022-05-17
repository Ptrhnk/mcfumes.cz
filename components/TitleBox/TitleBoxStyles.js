import styled from "styled-components";
import { animated } from "react-spring";

export const StyledTitle = styled(animated.h1)`
  display: flex;
  flex-direction: row;
  font-size: 3.5rem;
`;
export const StyledTitleBox = styled.div`
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
