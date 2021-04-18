import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { LogoBox, TitleBox } from "components";

const Container = styled.div`
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
`;
export default function Home() {
  return (
    <Container>
      <Head>
        <title>MC Fumes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <img
        src={require("../public/img/defumezlogo.jpeg")}
        style={{ width: "350px" }}
      /> */}
      <LogoBox image={require("../public/img/defumezlogo.jpeg")} />
      <TitleBox text="Coming soon..." />
    </Container>
  );
}
