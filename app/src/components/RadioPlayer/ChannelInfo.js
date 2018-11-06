/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const ChannelInfo = ({ channel }) => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-4">
          <img className="channel-logo" src={channel.logo} alt="Logo Channel" />
        </div>
        <div className="col-8">
          <h5>{channel.name}</h5>
          <h6>{channel.tags}</h6>
          <p>{channel.desc}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ChannelInfo;
