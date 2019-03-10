import React from "react";
import Clip from "./Clip";

export default function ClipsList(props) {
  return (
    <div>
      <div className="ui link divided items">
        {props.videos.map(video => (
          <Clip
            video={video}
            onVideoChange={props.onVideoChange}
            key={video.id.videoId}
          />
        ))}
      </div>
    </div>
  );
}
