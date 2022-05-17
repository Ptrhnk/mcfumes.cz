import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { LogoBox, TitleBox } from "components";

const PageContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  /* background-color: black; */
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
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  height: 100rem;
  /* border: 1px solid white; */
`;
export default function Home() {
  return (
    <PageContainer>
      <Head>
        <title>MC Fumes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <img
        src={require("../public/img/defumezlogo.jpeg")}
        style={{ width: "350px" }}
      /> */}
      <CenterContainer>
        <LogoBox image={require("../public/img/defumezlogo.jpeg")} />
        <TitleBox text="28.5.2022 BIGYFEST LIVEBAND / FUHA!!!!!!!!!!!!!!!!!" />
      </CenterContainer>
    </PageContainer>
  );
}
