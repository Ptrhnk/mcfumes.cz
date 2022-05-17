import { LogoBox } from "components";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LogoLayersContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 55rem;
  max-width: 100%;
  width: 100rem;
`;

export const LogoLayers = ({}) => {
  const [flipArr, setFlipArr] = useState(Array(6).fill(true));

  useEffect(() => void setInterval(() => alternate(), 100), []);

  const alternate = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    setTimeout(() => {
      flipArr[index] = !flipArr[index];
      setFlipArr(flipArr.slice());
    }, Math.floor(Math.random() * 100 + 400));
  };

  return (
    <LogoLayersContainer>
      {/* <LogoBox
        image={require("../../public/img/logo-layers/BackgroundWhite.png")}
        isOn={flipArr[0]}
      /> */}
      {/* <LogoBox
        image={require("../../public/img/logo-layers/BackgroundFront.png")}
        isOn={flipArr[2]}
      /> */}
      {/* <LogoBox
        image={require("../../public/img/logo-layers/LayerHeading.png")}
        isOn={flipArr[2]}
      /> */}
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandBlue.png")}
        isOn={flipArr[3]}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandRed.png")}
        isOn={flipArr[4]}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandColors.png")}
        isOn={flipArr[5]}
      />
    </LogoLayersContainer>
  );
};
