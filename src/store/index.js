import {applyMiddleware, compose, createStore} from 'redux';
import reducers from "reducers/index";
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

//export default store;
export default function (initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, initialState,
        composeEnhancers(applyMiddleware(...middlewares)));

    sagaMiddleware.run(rootSaga);

    return store;
}
