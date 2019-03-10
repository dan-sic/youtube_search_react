import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  onInputChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.fetchData(this.state.searchText);
  };

  render() {
    return (
      <div style={{ margin: "20px 0" }}>
        <h4 className="ui dividing header">Search the Youtube clips</h4>
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="ui field">
            <input
              type="text"
              className="ui input"
              value={this.state.searchText}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
