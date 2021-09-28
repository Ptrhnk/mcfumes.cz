import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";
import { AudioPlayer } from "components";

const player = ({}) => {
  return (
    <AudioPlayerProvider>
      <AudioPlayer />
    </AudioPlayerProvider>
  );
};

export default player;
