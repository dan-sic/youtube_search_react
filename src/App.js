import React, { Component } from "react";
import youtube from "./components/YoutubeAPI";
import SearchBar from "./components/SearchBar";
import VideoDisplay from "./components/VideoDisplay";
import ClipsList from "./components/ClipsList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  fetchData(term) {
    youtube
      .get("/search", {
        params: {
          q: term
        }
      })
      .then(res =>
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0]
        })
      )
      .catch(() => {
        throw new Error(
          "Provide a valid Youtube API key in YoutubeAPI.js component"
        );
      });
  }

  componentDidMount() {
    this.fetchData("react framework");
  }

  fetchDataOnSubmit = text => {
    this.fetchData(text);
  };

  changeSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar fetchData={this.fetchDataOnSubmit} />
        <div className="ui stackable grid">
          <div className="ten wide column">
            <VideoDisplay currentVideo={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <ClipsList
              videos={this.state.videos}
              onVideoChange={this.changeSelectedVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
