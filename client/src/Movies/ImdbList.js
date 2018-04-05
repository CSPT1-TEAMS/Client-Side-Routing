import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Imdb.css';

export default class ImdbList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: ""
    };
  }
  
  handleChange = (event) => {
    this.setState({search: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ search: "" });
  }

  componentDidMount() {
    axios
      .get(`http://www.omdbapi.com/?i=${this.props.imdbID}&apikey=3aecc7f9`)
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.search } onChange={ this.handleChange }/>
        </form>
        <div className="Imdb-Movie">
          <img src={ this.state.movies.Poster } alt="Movie Poster"/>
          <div>
            <p>{ this.state.movies.Title }</p>
            <p>Released: { this.state.movies.Released }</p>
            <p>Director: { this.state.movies.Director }</p>
            <p>Actors: { this.state.movies.Actors }</p>
            <p>Plot: { this.state.movies.Plot }</p>
          </div>  
        </div>
      </div>  
    );
  }
}