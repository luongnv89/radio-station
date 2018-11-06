/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const MediaList = ({ listChannels, channel, selectChannel }) => (
  <div className="ap-media-list">
    <div className="ap-media-list-header"><h2>All Channels</h2></div>
    <ul className="ap-list-media">
      {listChannels.map((ch, index) => (
        <li
          className={
            ch.name === channel.name ? 'media-item active' : 'media-item'
          }
          key={ch.name}
          onClick={() => selectChannel(index)}
        >
          {ch.logo && (<img src={ch.logo} alt="Media Logo" className="media-item-logo" />)} <span>{ch.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default MediaList;
