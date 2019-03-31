import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {
    ON_SEARCH_MOVIE
} from 'constants/ActionTypes';
import {onSearchMovieSuccess} from "actions/Movies";
import MoviesApi from 'api/MoviesApi';

export function* onSearchMovieRequest({payload}) {
    try {
        const result = yield call(MoviesApi.searchMovie, payload);
        yield put(onSearchMovieSuccess(result))
    } catch (error) {
        console.error('Error', error);
    }
}
export function* onSearchMovie() {
    yield takeEvery(ON_SEARCH_MOVIE, onSearchMovieRequest)
}

/**
 * RootSaga, listing all fetch function with function fork
 */
export default function* rootSaga() {
    yield all([
        fork(onSearchMovie),
    ]);
}
