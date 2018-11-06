/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PlayButtonIcon from './play-btn.svg';
import PauseButtonIcon from './pause-btn.svg';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
    };

    this.handlePlayButton = this.handlePlayButton.bind(this);
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
    const { channel } = this.props;
    const { isPlaying } = this.state;
    const btnIcon = isPlaying ? PauseButtonIcon : PlayButtonIcon;
    const btnPlayClassName = isPlaying ? 'audio-player-btn active' : 'audio-player-btn';
    return (
      <div className="audio-player">
        <audio src={channel.url[0]} controls ref={input => { this.audioPlayer = input; }} autoPlay hidden />
        <img className={btnPlayClassName} src={btnIcon} onClick={this.handlePlayButton} alt="Click to play/pause the audio"/>
      </div>
    );
  }
}

export default AudioPlayer;
