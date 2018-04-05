import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'aa71be19e3f94c1686212b7b46b28de9'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

const idArray = ['238', '11', '120'];

export default class Movie extends React.Component {
  
  state = {
    movie: null,
    movieData: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${idArray[id]}?api_key=${API_KEY}&poster_path/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg`)
      .then(response => this.setState(() => ({ movieData: response.data.poster_path })))
      .catch(error => { console.error(error)});
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
	  <img src={POSTER_PATH + this.state.movieData}/>
	  
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
