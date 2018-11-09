import React, { Component } from 'react';
import './App.css';
import RadioPlayer from './components/RadioPlayer/index';
const listAudioChannels = require('./listAudioChannels');
const { getHashValue, setHashValue } = require('./utils');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
    this.switchTheme = this.switchTheme.bind(this);
    this.switchChannel = this.switchChannel.bind(this);
  }

  switchChannel (channelIndex) {
    setHashValue(listAudioChannels[channelIndex].name);
  }

  switchTheme() {
    this.setState((prevState) => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }));
  }
  render() {
    document.title = 'Radio Station';
    const audioPlayerConfig = {
      showChannelNameOnTitle : true,
      simpleVersion : true,
    };
    let defaultChannelIndex = 0;
    const channelName = getHashValue();
    if (channelName) {
      for (let index = 0; index < listAudioChannels.length; index++) {
        const ch = listAudioChannels[index];
        if (ch.name === channelName){
          defaultChannelIndex = index;
          break;
        }
      }
    }

    return (
      <div className="container">
        <div className="header">
          <h1 onClick={this.switchTheme}>Radio Station</h1>
        </div>
        <RadioPlayer
          listChannels={listAudioChannels}
          config={audioPlayerConfig}
          theme={this.state.theme}
          defaultChannelIndex={defaultChannelIndex}
          switchChannel={this.switchChannel}
        />
      </div>
    );
  }
}

export default App;
