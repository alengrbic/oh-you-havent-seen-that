import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieInfo from "./MovieInfo";
import "../styles/App.css";

export class App extends Component {
  constructor() {
    super();
    this.handleRate = this.handleRate.bind(this);
  }

  state = {
    term: "",
    name: "",
    rating: "",
    posterURL: ""
  };
  //handles search input for a movie
  handleSearch = e => {
    this.setState({ term: e });
  };
  //fetches data from OMDB API
  async handleRate() {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${this.state.term}&apikey=c0cf81d0`
    );
    let data = await response.json();
    this.setState({
      rating: data.imdbRating,
      name: data.Title,
      posterURL: data.Poster
    });
    console.log(data);
  }

  shameRate = () => {
    return parseFloat(this.state.rating) < 6
      ? "Okay, you haven't missed much but still..."
      : parseFloat(this.state.rating) < 6.5
      ? "Now, it is not the best rating but you should probably watch it."
      : parseFloat(this.state.rating) < 7
      ? "What...have you even heard of it? Damn..."
      : parseFloat(this.state.rating) < 7.5
      ? "This is ridiculous, what do you mean you haven't seen it?"
      : parseFloat(this.state.rating) < 8
      ? "You...disgraceful."
      : parseFloat(this.state.rating) < 8.5
      ? "You need to reevaluate your taste."
      : parseFloat(this.state.rating) < 9
      ? "Mate where do you even live? I bet even Mozambicans have seen this!"
      : parseFloat(this.state.rating) < 10
      ? "WHAAAT?!! WHAT DO YOU MEAN YOU HAVEN'T SEEN IT?! WHAA..WHAAAAT?!"
      : "Try it out!";
  };

  render() {
    return (
      <div className="wrapper">
        <div className="title">
          <h1>Oh you haven't seen THAT?!</h1>
          <h4>An App that tells you how much you missed out!</h4>
        </div>
        <div className="content">
          <SearchBar
            value={this.state.term}
            handleSearch={this.handleSearch}
            handleRate={this.handleRate}
          />
          <h3>{this.shameRate()}</h3>
          <MovieInfo
            name={this.state.name}
            rating={this.state.rating}
            poster={this.state.posterURL}
          />
        </div>
      </div>
    );
  }
}

export default App;
