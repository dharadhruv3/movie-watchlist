// common sagas
import {all} from 'redux-saga/effects';
import moviesSagas from './Movies';

export default function* rootSaga(getState) {

    yield all([
        moviesSagas()
    ]);

}
