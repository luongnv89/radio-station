/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

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
    return (
      <div className="card text-center audio-player">
        <audio src={channel.url[0]} controls ref={input => { this.audioPlayer = input; }} autoPlay hidden />
        <div className="card-body">
          <div className="btn-group" role="group" aria-label="Audio Control Button">
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={this.props.handlePrevChannel}
            >
              Prev
            </button>
            <button type="button" className="btn btn-success" onClick={this.handlePlayButton}>{isPlaying ? 'Pause' : 'Play'}</button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={this.props.handleNextChannel}
            >
              Next
            </button>
          </div>
          {isPlaying
            && (
              <div className="radio-wave pull-right">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
