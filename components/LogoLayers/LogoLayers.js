import { LogoBox } from "components";
import React from "react";
import styled from "styled-components";

const LogoLayersContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 55rem;
  max-width: 100%;
  width: 100rem;
`;

export const LogoLayers = ({}) => {
  return (
    <LogoLayersContainer>
      <LogoBox
        image={require("../../public/img/logo-layers/BackgroundWhite.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/BackgroundFront.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandBlue.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandRed.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandColors.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHeading.png")}
      />
    </LogoLayersContainer>
  );
};
