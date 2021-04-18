import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  height: 100%;
  max-height: 55rem;
  max-width: 100%;
  width: 100rem;
  /* border: 1px dashed hotpink; */

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  /* @media (max-width: 900px) {
    width: 3rem;
    height: 1.4rem;
    margin: 0 0 0 1rem;
  } */
  /* @media (max-width: 700px) {
  } */
`;

export const LogoBox = ({ image }) => {
  return <ImageBox image={image} />;
};
