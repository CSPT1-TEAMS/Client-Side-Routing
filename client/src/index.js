import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

ReactDOM.render(
<Router>
  <div>
  <Route exact path="/movielist" component={MovieList}/>
  <Route path="/movielist/movie/:id" />
  {/* <Route path="/movie" component={Movie} />
  <Route path="/movielist" component={MovieList} /> */}
  <div>Application running, add your routing</div>
  
  </div>
</Router>,
  document.getElementById('root')
);
