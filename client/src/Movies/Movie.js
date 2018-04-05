import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'aa71be19e3f94c1686212b7b46b28de9'
const SEARCH_POSTER_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_MOVIE_URL = `http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

export default class Movie extends React.Component {
  state = {
    movie: null,
    posterPath: ''
  };

  componentDidMount() {
    const { id } = this.props.match.params

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
	const movie = response.data
	this.setState(() => ({ movie: movie }))
	return axios.get(`${SEARCH_MOVIE_URL}${movie.title}`)
      })
      .then(response => {
	const posterPath = response.data.results[0].poster_path
	this.setState({ posterPath })
      })
      .catch(e => console.error(e))
  }

  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    const { title, director, metascore, stars } = this.state.movie;

    return (
      <div className="movie-wrapper">

	<div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>
	  <img
	    src={`${SEARCH_POSTER_URL}${this.state.posterPath}`}
	    alt={`${this.state.movie.title} Poster`}
	    />
	  
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>

	<Link to="/"
          className="movie-home-link"
          style={{marginLeft:'15px'}}>
	  Back to home page
        </Link>
      </div>
    );
  }
}
