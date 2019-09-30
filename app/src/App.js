import React, { useState } from "react";
import "./App.css";
import RadioPlayer from "./components/RadioPlayer/index";
const listAudioChannels = require("./listAudioChannels");
const { getHashValue } = require("./utils");

const App = props => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  document.title = "Radio Station";

  // Get current chanel index
  let defaultChannelIndex = 0;
  const channelName = getHashValue();

  if (channelName) {
    for (let index = 0; index < listAudioChannels.length; index++) {
      const ch = listAudioChannels[index];
      if (ch.name === channelName) {
        defaultChannelIndex = index;
        break;
      }
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h1 onClick={switchTheme}>Radio Station</h1>
      </div>
      <RadioPlayer
        listChannels={listAudioChannels}
        theme={theme}
        defaultChannelIndex={defaultChannelIndex}
      />
    </div>
  );
};

export default App;
