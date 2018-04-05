import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const extractIdFromUrl = url => url[url.length-1]

console.log(extractIdFromUrl('/movies/1'))

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={MovieList}/>
    <Route path="/movies/:id" render={({ match }) => (
      <Movie id={extractIdFromUrl(match.url)}/>
    )}/>
  </div>
</Router>,
  document.getElementById('root')
);
