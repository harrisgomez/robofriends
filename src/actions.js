import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FETCHING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants';

export const setSearchField = text => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_FETCHING });

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: err }));
};