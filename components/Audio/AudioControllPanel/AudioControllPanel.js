import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAudioPlayer } from "react-use-audio-player";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import { BsSkipEndFill, BsSkipStartFill } from "react-icons/bs";
import ClipLoader from "react-spinners/ClipLoader";

const StyledAudioPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 20, 20, 1);
  border-top-left-radius: 1rem;
  height: 12rem;
  width: 18rem;
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
  margin-bottom: 1.4rem;
  text-align: center;
  line-height: 1.4;
`;
const StyledIconButton = styled.button`
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0 0.4rem;
`;
const StyledIoCloseOutline = styled(IoCloseOutline)`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  cursor: pointer;
`;
export const AudioControllPanel = ({
  onClose,
  onNext,
  onPrevious,
  audioFile
}) => {
  const {
    togglePlayPause,
    ready,
    loading,
    playing,
    error,
    volume,
    player,
    pause
  } = useAudioPlayer({
    src: audioFile.path,
    format: ["mp3"],
    autoplay: true,
    onend: () => {
      onNext();
    }
  });

  return (
    <StyledAudioPanel>
      <StyledIoCloseOutline
        size={20}
        onClick={() => {
          pause();
          onClose();
        }}
      />
      <StyledBox>
        <StyledTrackTitle>{audioFile.name}</StyledTrackTitle>
      </StyledBox>
      <StyledBox>
        <StyledIconButton onClick={() => onPrevious()}>
          <BsSkipStartFill size={21} />
        </StyledIconButton>
        {!ready && !error && loading ? (
          <ClipLoader color={"white"} size={34} />
        ) : playing ? (
          <AiOutlinePauseCircle
            style={{ cursor: "pointer" }}
            size={34}
            onClick={togglePlayPause}
          />
        ) : (
          <AiOutlinePlayCircle
            style={{ cursor: "pointer" }}
            size={34}
            onClick={togglePlayPause}
          />
        )}
        <StyledIconButton onClick={() => onNext()}>
          <BsSkipEndFill size={21} />
        </StyledIconButton>
      </StyledBox>
    </StyledAudioPanel>
  );
};
