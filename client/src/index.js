import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';


ReactDOM.render(
  <Router><div> Hello
     <Route exact path="/" component={MovieList}  />
     <Route path="/movies/:id" component={Movie}/>
  </div></Router>,
  document.getElementById('root')
);


// Inside /client/src/index.js add two routes.
// one route for / that loads the MovieList component.
// one route that will take an id parameter after/movies/ (ex: /movies/2, /movies/3 where the id is dynamic). This route should load the Movie component.
// When a user clicks on a movie card they should be taken to /movies/id of movie here to see the details for the selected movie.
// Add a link back to the home page from the Movie component inside /client/src/Movies/Movie.js.
// Modify line 12 on the Movie component to read the id from the URL.