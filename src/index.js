import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'; //* Logs the prevState, action that was triggered, and newState. A chronilogical list of actions the user performed
import './index.css';
import 'tachyons';

const rootEl = document.getElementById('root');
const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger)); //* Create store by passing in root reducer and provide as prop to <Provider/>

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