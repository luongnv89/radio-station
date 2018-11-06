import React, { Component } from 'react';
import './App.css';
import RadioPlayer from './components/RadioPlayer/index';
const listAudioChannels = require('./listAudioChannels');

class App extends Component {
  render() {
    document.title = 'Radio Station';
    const audioPlayerConfig = {
      showChannelNameOnTitle : true,
      simpleVersion : true,
    };
    return (
      <div className="container">
        <div className="header">
          <h1>Radio Station</h1>
        </div>
        <RadioPlayer
          listChannels={listAudioChannels}
          config={audioPlayerConfig}
        />
      </div>
    );
  }
}

export default App;
