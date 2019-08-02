import React, { Component } from "react";
import "../styles/SearchBar.css";

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Enter movie name..."
          onChange={e => {
            this.props.handleSearch(e.target.value);
          }}
        />{" "}
        <br />
        <button onClick={this.props.handleRate}>Request!</button>
      </div>
    );
  }
}

export default SearchBar;
