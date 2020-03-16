import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'; //* Logs the prevState, action that was triggered, and newState. A chronilogical list of actions the user performed
import thunkMiddleware from 'redux-thunk'; //* "Funnel" for executing actions returning async fn()s, since redux behaves synchronously and only handles action objects
import './index.css';
import 'tachyons';

import { searchRobots, requestRobots } from './reducers';

const rootEl = document.getElementById('root');
const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger) //! Middleware applied in order of args passed
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();