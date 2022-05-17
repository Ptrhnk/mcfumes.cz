import React from "react";

import { StyledTitle, StyledTitleBox } from "./TitleBoxStyles";

export const TitleBoxTranslate = ({ text }) => {
  return (
    <StyledTitleBox>
      <StyledTitle>{text}</StyledTitle>
    </StyledTitleBox>
  );
};
