import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';
import { createStore } from 'redux'; //* Creates a store from our reducer(s) 
import { Provider } from 'react-redux'; //* The <Provider/> propagates access to our state obj tree from <App/> to components

const store = createStore(searchRobots); //* Create store by passing in root reducer and provide as prop to <Provider/>
const rootEl = document.getElementById('root');

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