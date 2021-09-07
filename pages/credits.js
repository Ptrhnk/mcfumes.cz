import React from "react";

import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  letter-spacing: 2rem;
  font-size: 4rem;
  margin: 3rem 0;
  font-weight: normal;
  width: 100%;
  text-align: center;
`;

const PageContainer = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  overflow: auto;
  @media (max-width: 900px) {
    padding: 0 6%;
    position: absolute;
  }
  @media (max-width: 700px) {
    padding: 0 9%;
  }
`;
const StyledContent = styled.div`
  flex-direction: column;
  margin-bottom: 5rem;
`;
const StyledParagraph = styled.p`
  font-size: 1.6rem;
  text-indent: 3rem;
  margin-bottom: 2rem;
  letter-spacing: 5px;
`;
const StyledDonor = styled.p`
  font-size: 1.6rem;
  letter-spacing: 5px;
`;
const StyledHeading = styled.h2`
  letter-spacing: 1px;
  font-size: 1.9rem;
  text-decoration: underline;
  margin-bottom: 1rem;
`;
const Credits = ({}) => {
  return (
    <PageContainer>
      <StyledTitle>Credits</StyledTitle>
      <StyledContent>
        <StyledParagraph>
          Natáčení alba probíhalo mezi lety 2019 - 2021 v různých místech a
          hudebníchstudiích (Beep, Havas, Sound Device, Meet Factory, ve
          zkušebně Prago Union, u mě doma v zálomu, etc. O smíchání alba se
          postaral Tomáš Sochůrek ze studia Jižák a stem mastering provedl Risto
          Sokolovski z Risto sound studia.
        </StyledParagraph>
        <StyledHeading>
          Lidé, se kterými jsem toto dílo stvořil - bez jejichž energie by bylo
          nemyslitelné, aby něco vůbec vzniklo:
        </StyledHeading>
        <StyledParagraph>
          Karel Štulo, Michal Kolouch Daněk, Lang Biank, Ondřej Hauser, Jan
          Steinsdörfer, Igor Ochepovsky, Oliver Lipenský, Ashley Sarah Abrman,
          Antonín Dlapa, Zuzana Dovalová, DJs Bica, Ezop, Nakashi, Karel Pičman,
          Luka Šuto, Oskar Török, Petr Janeček, Prokop Wilhelm, Markéta
          Vychodilová, etc.
        </StyledParagraph>
        <StyledHeading>
          Obrovský dík a vděčnost patří dárcům, kteří přispěli:
        </StyledHeading>
        <StyledDonor>
          - Nadace města Letovice- poskytnutí grantu ve výši 30 000,- Kč
        </StyledDonor>
        <StyledDonor>
          - Rada města Letovice za poskytnutí daru ve výši 10 000,- Kč
        </StyledDonor>
        <StyledDonor>
          - Dále mým rodinným příslušníkům a nejbližším známým, kteří přispěli
          buď přímo nebo prostřednictvím serveru donio, jejichž seznam zveřejním
          po 30.11.2021
        </StyledDonor>
      </StyledContent>
    </PageContainer>
  );
};

export default Credits;
