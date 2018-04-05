import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
// import MovieList from './Movies/MovieList';
// import MovieCard from './Movies/Movie';
import ImdbCard from './Movies/ImdbCard'; 
import ImdbList from './Movies/ImdbList'; 

// ReactDOM.render(
//     <Router>
//   <div>
//     <Route exact path='/' component={MovieList} />
//     <Route path='/movies/:id' component={MovieCard} />
//   </div>
//     </Router>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <Router>
  <div>
    <Route exact path='/' component={ImdbList} />
  </div>
  </Router>,
document.getElementById('root')
);