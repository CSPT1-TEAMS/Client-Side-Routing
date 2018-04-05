import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import MovieList from './Movies/MovieList';
import MovieCard from './Movies/Movie';
import Actors from './Movies/Actors';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Route exact path="/" component={MovieList}/>
            <Route path={`/movies/:id`} component={MovieCard} />
            <Route path={`/actors`} component={Actors} />
        </div>
    );
}

export default App;