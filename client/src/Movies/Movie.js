import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Movie extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    const { id } = this.props.match.params
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
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
