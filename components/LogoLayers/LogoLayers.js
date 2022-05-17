import { LogoBox } from "components";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LogoLayersContainer = styled.div`
  position: relative;
  height: 100%;
  max-height: 55rem;
  max-width: 100%;
  width: 100rem;

  /* border: 1px dashed white; */
`;

export const LogoLayers = ({}) => {
  const [flipArr, setFlipArr] = useState(Array(4).fill(true));

  useEffect(() => void setInterval(() => alternate(), 170), []);

  const alternate = () => {
    const index = Math.floor(Math.random() * flipArr.length);
    setTimeout(() => {
      flipArr[index] = !flipArr[index];
      setFlipArr(flipArr.slice());
    }, Math.floor(Math.random() * 100 + 800));
  };

  return (
    <LogoLayersContainer>
      {/* <LogoBox
        image={require("../../public/img/logo-layers/BackgroundWhite.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHeading.png")}
      />
      <LogoBox
        image={require("../../public/img/logo-layers/BackgroundFront.png")}
      /> */}
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandBlue.png")}
        isOn={flipArr[0]}
        // lowOpacity
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandRed.png")}
        isOn={flipArr[1]}
        // lowOpacity
      />
      <LogoBox
        image={require("../../public/img/logo-layers/LayerHandColors.png")}
        isOn={flipArr[2]}
        // lowOpacity
      />
    </LogoLayersContainer>
  );
};
