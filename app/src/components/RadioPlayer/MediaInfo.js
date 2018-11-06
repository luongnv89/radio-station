/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const MediaInfo = ({ channel }) => (
  <div className="media-info row">
    <div className="col-2">
      <img className="media-logo" src={channel.logo} alt="Logo Channel" />
    </div>
    <div className="media-body col-8">
      <div className="media-title">
        <h3>{channel.name}</h3>
      </div>
      <div className="media-tags">
        <strong>{channel.tags}</strong>
      </div>
      <div className="media-description">
        <p>{channel.desc}</p>
      </div>
    </div>
  </div>
);

export default MediaInfo;
