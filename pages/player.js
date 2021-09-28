import React, { useState } from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import { AudioPlayer } from "components";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import styled from "styled-components";

const StyledPlayerWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
const StyledBsFillMusicPlayerFill = styled(BsFillMusicPlayerFill)`
  margin: 1rem;
  cursor: pointer;
`;

const player = ({}) => {
  const [playerOpen, setPlayerOpen] = useState(false);
  return (
    <StyledPlayerWrap>
      {playerOpen ? (
        <AudioPlayerProvider>
          <AudioPlayer />
        </AudioPlayerProvider>
      ) : (
        <StyledBsFillMusicPlayerFill
          onClick={() => setPlayerOpen(true)}
          size={50}
          color={"white"}
        />
      )}
    </StyledPlayerWrap>
  );
};

export default player;
