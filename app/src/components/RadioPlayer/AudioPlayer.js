/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";
import PlayButtonIcon from "./svg/play-btn.svg";
import PauseButtonIcon from "./svg/pause-btn.svg";
import LoadingButtonIcon from "./svg/loading-btn.svg";
import ErrorButtonIcon from "./svg/error-btn.svg";

const ActionButtons = {
  paused: PlayButtonIcon,
  playing: PauseButtonIcon,
  loading: LoadingButtonIcon,
  error: ErrorButtonIcon
};

const AudioPlayer = props => {
  const { sleepingTime, handlePlayerError, channel } = props;

  const [status, setStatus] = useState("loading");

  let audioPlayer = null;

  const _onPlay = () => {
    setStatus("playing");
  };

  const _onPause = () => {
    setStatus("paused");
  };

  const _onError = error => {
    // console.error('ERROR: ...: ',error);
    handlePlayerError(error);
  };

  const handlePlayButton = () => {
    console.log("handle playing button...", status);
    if (status === "playing") {
      audioPlayer.pause();
    } else if (status === "paused") {
      audioPlayer.play();
      setStatus("loading");
    }
  };

  console.log(status);

  if (sleepingTime) {
    console.log(`Going to sleep in ${sleepingTime} minute(s)`);
    setTimeout(() => {
      audioPlayer.pause();
    }, sleepingTime * 60 * 1000);
  }

  return (
    <div className="audio-player">
      <audio
        src={channel.url[0]}
        controls
        ref={input => {
          audioPlayer = input;
        }}
        onPlay={_onPlay}
        onPause={_onPause}
        onError={_onError}
        hidden
        autoPlay
      />
      <img
        className={`audio-player-btn ${status}`}
        src={ActionButtons[status]}
        onClick={handlePlayButton}
        alt="Click to play/pause the audio"
      />
    </div>
  );
};

export default AudioPlayer;
