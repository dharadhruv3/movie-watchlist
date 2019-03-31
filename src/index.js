import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './App';
const rootEl = document.getElementById('app');

export const store = configureStore();

ReactDOM.render(
    <AppContainer warnings={false}>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    rootEl
);
