import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Actors extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }


  componentDidMount() {
    // change this line to grab the id passed on the URL
    // const id = this.props.movie.id;
    
    axios
      .get(`http://localhost:5000/api/movies/`)
      .then(response => this.setState(() => ({ movie: response.data })))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.movie);
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }
    return (
      <div>
        {this.state.movie.map(movie => (
            movie.stars.map(star => (
              <div key={star} className="movie-star">
                {star}
            </div>
            ))))
          }
      </div>
    )
  }
}
