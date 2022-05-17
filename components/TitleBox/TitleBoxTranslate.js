import React from "react";
import { StyledTitle, StyledTitleBox } from "./TitleBoxStyles";
import { useSpring, config, animated } from "react-spring";

export const TitleBoxTranslate = ({ text }) => {
  const styles = useSpring({
    loop: { reverse: false },
    from: { transform: "translate(0px)" },
    to: { transform: "translate(300px)" }
  });

  return (
    <StyledTitleBox>
      <StyledTitle style={styles}>{text}</StyledTitle>
    </StyledTitleBox>
  );
};
