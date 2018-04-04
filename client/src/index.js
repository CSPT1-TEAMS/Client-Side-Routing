import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
