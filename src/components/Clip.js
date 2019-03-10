import React from "react";

export default function Clip(props) {
  const { video, onVideoChange } = props;
  return (
    <div className="item" onClick={onVideoChange.bind(null, video)}>
      <div className="ui image">
        <img src={video.snippet.thumbnails.default.url} alt="avatar" />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
