import {
    ON_SEARCH_MOVIE, ON_SEARCH_MOVIE_SUCCESS,
    ON_ADD_TO_WATCH_LIST, ON_REMOVE_FROM_WATCH_LIST
} from 'constants/ActionTypes';

const INIT_STATE = {
    searching: false,
    searchResults: [],
    watchList: JSON.parse(localStorage.getItem("watchList"))
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case ON_SEARCH_MOVIE: {
            return {
                ...state,
                searching: true
            }
        }

        case ON_SEARCH_MOVIE_SUCCESS: {
            return {
                ...state,
                searching: false,
                searchResults: action.payload
            }
        }

        case ON_ADD_TO_WATCH_LIST: {

            let watchList = state.watchList ? state.watchList : [];

            // add movie to watch list state
            watchList.push(action.payload);

            watchList = Object.assign([], watchList);

            // store movie in localStorage
            localStorage.setItem("watchList", JSON.stringify(watchList));

            return {
                ...state,
                watchList: watchList
            }
        }

        case ON_REMOVE_FROM_WATCH_LIST: {

            let watchList = state.watchList;

            // find index of removed movie
            let index = watchList.indexOf(action.payload);

            if (index > -1) {
                // splice un movie from array using index
                watchList.splice(index, 1);
            }

            watchList = Object.assign([], watchList);

            // updated watch list in localStorage
            localStorage.setItem("watchList", JSON.stringify(watchList));

            return {
                ...state,
                watchList: watchList
            }
        }

        default:
            return state;
    }
}
