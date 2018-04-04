import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route to="/" component={MovieList}/>
            <Route to={`/movies/${Movie.id}`} component={Movie} />
        </div>
    );
}

export default App;