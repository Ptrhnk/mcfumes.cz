import React, { useState } from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import styled from "styled-components";
import { AudioControllPanel } from "components";

const StyledPlayerWrap = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;
const StyledBsFillMusicPlayerFill = styled(BsFillMusicPlayerFill)`
  margin: 1.6rem;
  cursor: pointer;
`;

const tracklist = [
  { path: "/songs/nlb/01_intro.mp3", name: "Intro" },
  { path: "/songs/nlb/02_linka.mp3", name: "Linka" },
  { path: "/songs/nlb/03_meka.mp3", name: "Meka" },
  { path: "/songs/nlb/04_drdol.mp3", name: "Drdol" },
  { path: "/songs/nlb/05_korporat.mp3", name: "Korporát" },
  { path: "/songs/nlb/06_cz_rap.mp3", name: "ČS rap" },
  { path: "/songs/nlb/07_nlb.mp3", name: "Nesnesitelná lehkost beatů" },
  { path: "/songs/nlb/08_rapy_a_pravda.mp3", name: "Rapy a Pravda" },
  { path: "/songs/nlb/09_hvezda_skit.mp3", name: "Hvězda skit" },
  { path: "/songs/nlb/10_outro.mp3", name: "Outro" }
];

export const AudioPlayer = ({}) => {
  const [playerInitialized, setPlayerInitialized] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const setNextTrack = () => {
    currentTrack < tracklist.length - 1
      ? setCurrentTrack(currentTrack + 1)
      : setCurrentTrack(0);
  };
  const setPreviousTrack = () => {
    currentTrack > 0
      ? setCurrentTrack(currentTrack - 1)
      : setCurrentTrack(tracklist.length - 1);
  };

  return (
    <StyledPlayerWrap>
      {playerInitialized ? (
        <AudioPlayerProvider>
          {playerOpen ? (
            <AudioControllPanel
              onClose={() => setPlayerOpen(false)}
              audioFile={tracklist[currentTrack]}
              onNext={setNextTrack}
              onPrevious={setPreviousTrack}
            />
          ) : (
            <StyledBsFillMusicPlayerFill
              onClick={() => setPlayerOpen(true)}
              size={50}
              color={"white"}
            />
          )}
        </AudioPlayerProvider>
      ) : (
        <StyledBsFillMusicPlayerFill
          onClick={() => {
            setPlayerInitialized(true);
            setPlayerOpen(true);
          }}
          size={50}
          color={"white"}
        />
      )}
    </StyledPlayerWrap>
  );
};
