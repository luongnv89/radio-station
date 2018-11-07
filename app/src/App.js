import React, { Component } from 'react';
import './App.css';
import RadioPlayer from './components/RadioPlayer/index';
const listAudioChannels = require('./listAudioChannels');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
    this.switchTheme = this.switchTheme.bind(this);
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
    return (
      <div className="container">
        <div className="header">
          <h1 onClick={this.switchTheme}>Radio Station</h1>
        </div>
        <RadioPlayer
          listChannels={listAudioChannels}
          config={audioPlayerConfig}
          theme={this.state.theme}
        />
      </div>
    );
  }
}

export default App;
