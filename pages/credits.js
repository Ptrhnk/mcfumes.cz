import React from "react";

import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  letter-spacing: 2px;
  font-size: 3rem;
`;

const PageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
  @media (max-width: 900px) {
    padding: 4%;
    position: absolute;
  }
  @media (max-width: 700px) {
    padding: 10%;
  }
`;

const Credits = ({}) => {
  return (
    <PageContainer>
      <StyledTitle>Credits</StyledTitle>
    </PageContainer>
  );
};

export default Credits;
