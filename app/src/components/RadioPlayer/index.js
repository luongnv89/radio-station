/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './bootstrap.css';
import './index.css';
import AudioPlayer from './AudioPlayer';
import ChannelInfo from './ChannelInfo';
import TrackList from './TrackList';

class RadioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannelIndex: 0,
    };

    this.handleNextChannel = this.handleNextChannel.bind(this);
    this.handlePrevChannel = this.handlePrevChannel.bind(this);
    this.selectChannel = this.selectChannel.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
  }

  selectChannel(index) {
    this.setState({ currentChannelIndex: index });
  }

  handlePrevChannel() {
    this.setState((prevState) => ({
      currentChannelIndex:
        prevState.currentChannelIndex === 0 ? 0 : prevState.currentChannelIndex - 1,
    }));
  }

  handleNextChannel() {
    this.setState((prevState) => ({
      currentChannelIndex:
        prevState.currentChannelIndex === this.props.listChannels.length - 1
          ? this.props.listChannels.length - 1
          : prevState.currentChannelIndex + 1,
    }));
  }

  handlePlayButton() {
    if (this.state.isPlaying) {
      this.audioPlayer.pause();
    } else {
      this.audioPlayer.play();
    }
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  }

  render() {
    const { listChannels, config } = this.props;
    let tmpConfig = config;
    if (!tmpConfig) {
      tmpConfig = {};
    }
    const { simpleVersion, showChannelNameOnTitle } = tmpConfig;
    const currentChannel = listChannels[this.state.currentChannelIndex];
    if (showChannelNameOnTitle) {
      document.title = `Radio Station - ${currentChannel.name}`;
    }
    return (
      <div>
        <AudioPlayer
          channel={currentChannel}
          handleNextChannel={this.handleNextChannel}
          handlePrevChannel={this.handlePrevChannel}
        />
        {simpleVersion
        && (
          <div>
            <ChannelInfo channel={currentChannel} />
            <TrackList
              listChannels={listChannels}
              channel={currentChannel}
              selectChannel={this.selectChannel}
            />
          </div>
        )}
      </div>
    );
  }
}

export default RadioPlayer;
