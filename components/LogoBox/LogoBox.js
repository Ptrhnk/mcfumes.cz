import React from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

const ImageBox = styled(animated.div)`
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

export const LogoBox = ({ image, isOn = true }) => {
  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 20,
      mass: 1
    },
    opacity: isOn ? "1" : "0"
  });

  return <ImageBox image={image} style={strobeAnim} />;
};
