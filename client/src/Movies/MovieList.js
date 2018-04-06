import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MovieList extends React.Component {
  state = {
    movies: [],
  };

  
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieCard({ movie }) {
  const { title, director, metascore, vote_average, vote_count, popularity, budget, revenue, stars } = movie;
  return (
    <div className="Note-row">
      <div className="Note-item">
        <Link to={`/movies/${movie.id}`}>
          <div className="Note-header"><h2>{title}</h2>
          </div>
        </Link>            
        <h4><div className="movie-director">
          Director: <em>{director}</em> 
        </div></h4>
         <div className="Sub-Header">Cast</div>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}       
        <div className="Sub-Header">Marketing Stats</div>  {/* metascore, vote_average, vote_count, popularity, budget, revenue, */}
        <div className="movie-metascore">Metascore: <strong>{metascore}</strong></div>
        <div className="movie-popularity">Popularity: <strong>{popularity}</strong></div> 
        <div className="movie-vote_average">Average Votes: <strong>{vote_average}</strong></div> 
        <div className="movie-vote_count">Total Votes: <strong>{vote_count}</strong></div> 
        <p></p>
        <div className="movie-budget">Budget: <strong>{budget}</strong></div> 
        <div className="movie-revenue">Revenue: <strong>{revenue}</strong></div>


      </div>
    </div>

  );
}
