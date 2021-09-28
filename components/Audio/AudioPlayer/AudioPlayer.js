import React, { useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";

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
export const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const setNextTrack = () => {
    currentTrack < tracklist.length - 1
      ? setCurrentTrack(currentTrack + 1)
      : setCurrentTrack(0);
  };

  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: tracklist[currentTrack].path,
    format: ["mp3"],
    autoplay: false,
    onend: () => console.log("sound has ended!")
  });

  // if (!ready && !loading)
  //   return <div style={{ color: "white" }}>No audio to play</div>;
  // if (loading) return <div style={{ color: "white" }}>Loading audio</div>;

  return (
    <div>
      <button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</button>
      <button onClick={() => setNextTrack()}>{">>"}</button>
      <p style={{ color: "white" }}>{tracklist[currentTrack].name}</p>
    </div>
  );
};
