/** src/App.js
 Parent component which imports all the website components
 */

<<<<<<< HEAD
import React, { Component } from 'react'
import AppRouter from './AppRouter'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <AppRouter />
=======
import React, { Component } from "react";
import Movies from "./Components/Movies";
import Search from "./Components/Search";
import Footer from "./Footer";
import PrimaryNavBar from "./PrimaryNavbar";

const API_KEY = "81cccefa5d8106ac2032d82235c675bc";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: ""
    };

    this.onInput = this.onInput.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onInput(query) {
    this.setState({
      query
    });
  }

  onClick() {
    this.searchMovie(this.state.query);
  }

  onKeyPress(e) {
    if (e.key == "Enter") {
      e.preventDefault();
      this.searchMovie(this.state.query);
    }
  }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  searchMovie(query) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cfe422613b250f702980a3bbf9e90716`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.results
        });
      });
  }

  componentDidMount() {
    // this.getPopularMovies();
  }

  render() {
    const { movies, query } = this.state;
    const isSearched = query => item =>
      !query || item.title.toLowerCase().includes(query.toLowerCase());

    return (
      <div className="app">
        <PrimaryNavBar />
        <Search
          query={query}
          onInput={this.onInput}
          placeholder="Search for Movie Title …"
          onClick={this.onClick}
          onKeyPress={this.onKeyPress}
        />
        <Movies movies={movies.filter(isSearched(query))} />
        <Footer />
>>>>>>> 6860d2f0a4b7b645087642d0d2f6770bdd1743c8
      </div>
    );
  }
}

export default App;
