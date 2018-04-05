import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'e3dac0b87a792dff369db76d8e6c7e80';

export default class MovieCard extends React.Component {
  
  state = {
    movie: null,
  };

  componentDidMount() {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id; // thats gives us the params URL
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });

    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=e3dac0b87a792dff369db76d8e6c7e80`)
      .then(repsone => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
      
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=e3dac0b87a792dff369db76d8e6c7e80&query=${title}`)  //('https://api.themoviedb.org/3/search/movie?api_key=e3dac0b87a792dff369db76d8e6c7e80&query=Jack+Reacher')
      
      .then(repsone => this.setState(() => ({ movie: response.data })))
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
        <Link to="/">Go back</Link> 
      </div>
    );
  }
}
