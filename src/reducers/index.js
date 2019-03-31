import {combineReducers} from 'redux';
import Movies from 'reducers/Movies.js';

const reducerUsed =
    {
        movies: Movies
    };

const reducers = combineReducers(reducerUsed);
export default reducers;
