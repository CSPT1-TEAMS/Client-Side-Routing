import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route } from 'react-router-dom' //1

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render( 
    <Router> 
      <div>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ Movie } />
      </div>
    </Router>,
  document.getElementById('root')
);
//  Added import router statement and exact match Route in render 