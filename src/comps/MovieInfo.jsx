import React, { Component } from "react";
import "../styles/MovieInfo.css";

export class MovieInfo extends Component {
  render() {
    return (
      <div>
        <h2>Title: {this.props.name}</h2>
        <h3>IMDB Rating: {this.props.rating}</h3>
        <img src={this.props.poster} alt="" />
      </div>
    );
  }
}

export default MovieInfo;
