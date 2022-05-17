import React, { useLayoutEffect, useState } from "react";
import { StyledTransformingTitle, StyledTitleBox } from "./TitleBoxStyles";

export const TitleBoxTranslate = ({ text }) => {
  return (
    <StyledTitleBox>
      <StyledTransformingTitle>{text}</StyledTransformingTitle>
    </StyledTitleBox>
  );
};
