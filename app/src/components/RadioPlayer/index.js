/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import "./index.css";
import AudioPlayer from "./AudioPlayer";
import MediaInfo from "./MediaInfo";
import MediaList from "./MediaList";
import Timer from './Timer';
const { setHashValue } = require("../../utils");

const RadioPlayer = props => {
  const [showList, setShowList] = useState(false);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [sleepingTime, setSleepingTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);

  const { listChannels, theme } = props;
  let apTheme = theme ? theme : "dark";
  let oldBodyClassName = document.body.getAttribute("class")
    ? document.body.getAttribute("class")
    : "";
  if (oldBodyClassName.indexOf(apTheme) === -1) {
    oldBodyClassName = oldBodyClassName
      .replace(" dark", "")
      .replace(" light", "");
    const newBodyClassName = oldBodyClassName + " " + apTheme;
    document.body.setAttribute("class", newBodyClassName);
  }
  const currentChannel = listChannels[currentChannelIndex];
  document.title = `Radio Station - ${currentChannel.name}`;
  setHashValue(currentChannel.name);

  const sleepingTimeElRef = React.createRef();

  useEffect(() => {
    setCurrentChannelIndex(props.defaultChannelIndex);
  }, [props.defaultChannelIndex]);

  const selectChannel = index => {
    setCurrentChannelIndex(index);
    setShowList(false);
  };

  const handleShowListBtn = () => {
    setShowList(!showList);
  };
  const handlePlayerError = () => {
    console.error(`Cannot play the channel: ${currentChannel.name}`);
    console.log("Going to try the next channel");
    setCurrentChannelIndex(currentChannelIndex + 1);
    // if (props.switchChannel) props.switchChannel(currentChannelIndex + 1);
  };

  const handleSetSleepingTime = () => {
    const time = +sleepingTimeElRef.current.value;
    if (time <= 0 || time > 120) {
      alert("Invalid input. The sleeping time should be between 1 and 120");
    } else {
      setSleepingTime(time);
      setPausedTime(Date.now() + time * 60 * 1000);
    }
  };

  console.log("Going to play current channel: ", currentChannel.name);

  return (
    <div className={`RadioPlayer ${apTheme}`}>
      <div className="player-bar">
        <AudioPlayer
          channel={currentChannel}
          handlePlayerError={handlePlayerError}
          sleepingTime={sleepingTime}
        />
        {sleepingTime ? (
          <Timer pausedTime={pausedTime}/>
        ) : (
          <div className="form-control">
            <input
              type="number"
              ref={sleepingTimeElRef}
              placeholder="Number of minutes"
            />
            <button className="btn" onClick={handleSetSleepingTime}>
              Set
            </button>
          </div>
        )}

        <button className="show-list-btn" onClick={handleShowListBtn}>
          {showList ? "Back" : "Switch Channel"}
        </button>
      </div>

      {showList ? (
        <MediaList
          listChannels={listChannels}
          channel={currentChannel}
          selectChannel={selectChannel}
        />
      ) : (
        <MediaInfo channel={currentChannel} />
      )}
    </div>
  );
};

export default RadioPlayer;
