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
    this.setState({ currentChannelIndex: index, showList: false });
  }

  handleShowListBtn() {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  }

  render() {
    const { listChannels, theme } = this.props;
    let apTheme = theme ? theme : 'dark';
    let oldBodyClassName = document.body.getAttribute('class') ? document.body.getAttribute('class') : '';
    if (oldBodyClassName.indexOf(apTheme) === -1) {
      oldBodyClassName = oldBodyClassName.replace(' dark','').replace(' light','');
      const newBodyClassName = oldBodyClassName + ' ' + apTheme;
      document.body.setAttribute('class', newBodyClassName);
    }
    const currentChannel = listChannels[this.state.currentChannelIndex];
    document.title = `Radio Station - ${currentChannel.name}`;
    return (
      <div className={`RadioPlayer ${apTheme}`}>
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
