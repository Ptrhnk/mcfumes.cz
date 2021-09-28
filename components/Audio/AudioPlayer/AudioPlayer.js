import React, { useState } from "react";
import styled from "styled-components";
import { useAudioPlayer } from "react-use-audio-player";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import {
  IoPlaySkipBackCircleOutline,
  IoPlaySkipForwardCircleOutline
} from "react-icons/io5";

import { VscLoading } from "react-icons/vsc";
import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";

const tracklist = [
  { path: "/songs/nlb/01_intro.mp3", name: "Intro" },
  { path: "/songs/nlb/02_linka.mp3", name: "Linka" },
  { path: "/songs/nlb/03_meka.mp3", name: "Meka" },
  { path: "/songs/nlb/04_drdol.mp3", name: "Drdol" },
  { path: "/songs/nlb/05_korporat.mp3", name: "Korporat" },
  { path: "/songs/nlb/06_cz_rap.mp3", name: "ČS rap" },
  { path: "/songs/nlb/07_nlb.mp3", name: "Nesnesitelná Lehkost Beatů" },
  { path: "/songs/nlb/08_rapy_a_pravda.mp3", name: "Rapy a Pravda" },
  { path: "/songs/nlb/09_hvezda_skit.mp3", name: "Hvězda skit" },
  { path: "/songs/nlb/10_outro.mp3", name: "Outro" }
];
const StyledAudioPanel = styled.div`
  position: absolute;
  bottom: 0;
  /* left: 0; */
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.5);
  border-top-left-radius: 1rem;
  /* height: 10rem; */
  width: 30rem;
  padding: 1.5rem;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTrackTitle = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-bottom: 1rem;
`;
const StyledIconButton = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0 0.3rem;
`;
export const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);

  const { togglePlayPause, ready, loading, playing, error, volume, play } =
    useAudioPlayer({
      src: tracklist[currentTrack].path,
      format: ["mp3"],
      autoplay: false
    });

  const setNextTrack = () => {
    currentTrack < tracklist.length - 1
      ? setCurrentTrack(currentTrack + 1)
      : setCurrentTrack(0);
    play();
  };
  const setPreviousTrack = () => {
    currentTrack > 0
      ? setCurrentTrack(currentTrack - 1)
      : setCurrentTrack(tracklist.length - 1);
    play();
  };

  return (
    <StyledAudioPanel>
      <StyledBox>
        <StyledTrackTitle>{tracklist[currentTrack].name}</StyledTrackTitle>
      </StyledBox>
      <StyledBox>
        <StyledIconButton onClick={() => setPreviousTrack()}>
          <BsSkipStartFill size={22} />
        </StyledIconButton>
        <StyledIconButton onClick={togglePlayPause}>
          {!ready && !error && loading ? (
            <VscLoading size={36} />
          ) : playing ? (
            <AiOutlinePauseCircle size={36} />
          ) : (
            <AiOutlinePlayCircle size={36} />
          )}
        </StyledIconButton>
        <StyledIconButton onClick={() => setNextTrack()}>
          <BsSkipEndFill size={22} />
        </StyledIconButton>
      </StyledBox>
    </StyledAudioPanel>
  );
};
