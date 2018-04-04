import React from "react";
import { Route} from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const App = () => {
    return(
        <div>
            <Route exact path="/" component={MovieList}/>
            <Route path="/Movies/:id" component={Movie}/>
        </div>
    );
}


export default App;