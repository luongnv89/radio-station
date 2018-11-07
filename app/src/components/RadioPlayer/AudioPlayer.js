/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import PlayButtonIcon from './svg/play-btn.svg';
import PauseButtonIcon from './svg/pause-btn.svg';
import LoadingButtonIcon from './svg/loading-btn.svg';
import ErrorButtonIcon from './svg/error-btn.svg';

const ActionButtons = {
  paused: PlayButtonIcon,
  playing: PauseButtonIcon,
  loading: LoadingButtonIcon,
  error: ErrorButtonIcon,
};


class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStatus: 'paused',
      error: '',
    };

    this.handlePlayButton = this.handlePlayButton.bind(this);
    this._onPlay = this._onPlay.bind(this);
    this._onPause = this._onPause.bind(this);
    this._onError = this._onError.bind(this);
  }

  componentDidMount() {
    this.setState({
      playerStatus: 'loading',
    });
    setTimeout(() => {
      if (this.state.playerStatus === 'loading') {
        this.setState({
          playerStatus: 'paused',
        });
      }
    }, 5000);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.channel !== this.props.channel) {
      this.setState({
        playerStatus: 'loading',
      });
    }
  }

  _onPlay() {
    this.setState({
      playerStatus: 'playing',
    });
  }

  _onPause() {
    this.setState({
      playerStatus: 'paused',
    });
  }

  _onError(error) {
    console.error(error);
    this.setState({
      playerStatus: 'error',
    });
  }

  handlePlayButton() {
    if (this.state.playerStatus === 'playing') {
      this.audioPlayer.pause();
    } else if (this.state.playerStatus === 'paused') {
      this.audioPlayer.play();
      this.setState({
        playerStatus: 'loading',
      });
    }
  }

  render() {
    const { channel } = this.props;
    const { playerStatus } = this.state;
    const btnIcon = ActionButtons[playerStatus];

    // TODO: handle audio player events by adding onEvent={this.onEvent}
    return (
      <div className="audio-player">
        <audio src={channel.url[0]} controls ref={input => { this.audioPlayer = input; }} onPlay={this._onPlay} onPause={this._onPause} onError={this._onError} hidden autoPlay/>
        <img className={`audio-player-btn ${playerStatus}`} src={btnIcon} onClick={this.handlePlayButton} alt="Click to play/pause the audio" />
      </div>
    );
  }
}

export default AudioPlayer;
