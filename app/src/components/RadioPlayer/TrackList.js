/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const TrackList = ({ listChannels, channel, selectChannel }) => (
  <div className="card">
    <div className="card-header">All Channels</div>
    <ul className="list-group list-group-flush">
      {listChannels.map((ch, index) => (
        <li
          className={
            ch.name === channel.name ? 'list-group-item active' : 'list-group-item'
          }
          key={ch.name}
          onClick={() => selectChannel(index)}
          style={{ cursor: 'pointer' }}
        >
          {ch.name}
        </li>
      ))}
    </ul>
  </div>
);

export default TrackList;
