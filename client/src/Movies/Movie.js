import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class MovieCard extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id=this.props.match.params.id;
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    const { title, director, metascore, stars,image } = this.state.movie;
    return (
      
    <div>

        <Link className="home-button" to="/">MovieList Home</Link>
      <div className="movie-card" style = {{backgroundImage: `url(${image})`}} >
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
    </div>
    );
  }
}
