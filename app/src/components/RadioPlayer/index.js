/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import './index.css';
import AudioPlayer from './AudioPlayer';
import MediaInfo from './MediaInfo';
import MediaList from './MediaList';

class RadioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannelIndex: 0,
      showList: false,
    };

    this.selectChannel = this.selectChannel.bind(this);
    this.handleShowListBtn = this.handleShowListBtn.bind(this);
  }

  selectChannel(index) {
    this.setState({ currentChannelIndex: index });
  }

  handleShowListBtn() {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  }

  render() {
    const { listChannels } = this.props;
    const currentChannel = listChannels[this.state.currentChannelIndex];
    document.title = `Radio Station - ${currentChannel.name}`;
    return (
      <div className="RadioPlayer">
        <div className="player-bar">
          <AudioPlayer channel={currentChannel} />
          <button className="show-list-btn" onClick={this.handleShowListBtn}>{this.state.showList ? 'Back' : 'Switch Channel'}</button>
        </div>
        {this.state.showList ? (<MediaList
              listChannels={listChannels}
              channel={currentChannel}
              selectChannel={this.selectChannel}
            />) : (<MediaInfo channel={currentChannel} />)}
      </div>
    );
  }
}

export default RadioPlayer;
