import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  color: white;
  letter-spacing: 2rem;
  font-size: 5rem;
  font-weight: normal;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;
const PageContainer = styled.div`
  position: absolute;
  min-height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 3% 4.2rem 3%;
  overflow: auto;
  @media (max-width: 900px) {
    padding: 0 6%;
  }
  @media (max-width: 700px) {
    padding: 0 9%;
  }
`;
const StyledContent = styled.div`
  flex-direction: column;
  width: 90%;
  line-height: 1.8;
  @media (min-width: 1280px) {
    width: 110rem;
  }
`;
const StyledHeading = styled.h2`
  letter-spacing: 2px;
  font-size: 2.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;
const StyledParagraph = styled.p`
  font-size: 1.8rem;
  text-indent: 6rem;
  margin-bottom: 2.7rem;
  letter-spacing: 5px;
`;
const StyledDonor = styled.li`
  font-size: 1.8rem;
  letter-spacing: 5px;
  padding-left: 1rem;
  margin-left: 1.8rem;
  margin-bottom: 0.2rem;
  line-height: 1.8;
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
          Lidé, se kterými jsem toto dílo stvořil,
          <br />
          bez jejichž energie by bylo nemyslitelné, aby něco vůbec vzniklo:
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
        <ul>
          <StyledDonor>
            Nadace města Letovice- poskytnutí grantu ve výši 30 000,- Kč
          </StyledDonor>
          <StyledDonor>
            Rada města Letovice za poskytnutí daru ve výši 10 000,- Kč
          </StyledDonor>
          <StyledDonor>
            Dále mým rodinným příslušníkům a nejbližším známým, kteří přispěli
            buď přímo
            <br />
            nebo prostřednictvím serveru donio, jejichž seznam zveřejním po
            30.11.2021
          </StyledDonor>
        </ul>
      </StyledContent>
    </PageContainer>
  );
};

export default Credits;
