import React from "react";
import "../styles/videoDisplayStyles.css";

export default function VideoDisplay(props) {
  const { currentVideo } = props;
  if (currentVideo) {
    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="iframe-container">
            <iframe
              className="resp-iframe"
              title="Video display"
              src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              frameBorder="10"
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="header">{currentVideo.snippet.title}</div>
          <div className="description">{currentVideo.snippet.description}</div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
