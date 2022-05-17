import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  height: 100%;
  max-height: 55rem;
  max-width: 100%;
  width: 100rem;
  position: absolute;
  /* border: 1px dashed hotpink; */

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LogoBox = ({ image }) => {
  return <ImageBox image={image} />;
};
