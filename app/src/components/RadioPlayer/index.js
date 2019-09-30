/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import "./index.css";
import AudioPlayer from "./AudioPlayer";
import MediaInfo from "./MediaInfo";
import MediaList from "./MediaList";
const { setHashValue } = require('../../utils');

const RadioPlayer = props => {
  const [showList, setShowList] = useState(false);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
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
    console.log('Going to try the next channel');
    setCurrentChannelIndex(currentChannelIndex + 1);
    // if (props.switchChannel) props.switchChannel(currentChannelIndex + 1);
  }

  console.log('Going to play current channel: ', currentChannel.name);

  return (
    <div className={`RadioPlayer ${apTheme}`}>
      <div className="player-bar">
        <AudioPlayer
          channel={currentChannel}
          handlePlayerError={handlePlayerError}
        />
        <button className="show-list-btn" onClick={handleShowListBtn}>
          {showList ? "Back" : "Switch Channel"}
        </button>
      </div>
      <input type="number" className="" placeholder="Number of minutes"/>
      {showList ? (
        <MediaList
          listChannels={listChannels}
          channel={currentChannel}
          selectChannel={selectChannel}
        />
      ) : (
        <MediaInfo channel={currentChannel}/>
      )}
    </div>
  );
};

export default RadioPlayer;
