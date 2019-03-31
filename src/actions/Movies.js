import {
    ON_SEARCH_MOVIE,
    ON_SEARCH_MOVIE_SUCCESS,
    ON_ADD_TO_WATCH_LIST,
    ON_REMOVE_FROM_WATCH_LIST
} from 'constants/ActionTypes';

export const onSearchMovie = (search) => {
    return {
        type: ON_SEARCH_MOVIE,
        payload: search
    };
};


export const onSearchMovieSuccess = (data) => {
    return {
        type: ON_SEARCH_MOVIE_SUCCESS,
        payload: data
    }
};

export const onAddToWatchList = (movie) => {
    return {
        type: ON_ADD_TO_WATCH_LIST,
        payload: movie
    }
};

export const onRemoveFromWatchList = (movie) => {
    return {
        type: ON_REMOVE_FROM_WATCH_LIST,
        payload: movie
    }
};
