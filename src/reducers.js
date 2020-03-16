import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_FETCHING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants';

const initSearchState = {
    searchInputVal: '',
};

export const searchRobots = (state = initSearchState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchInputVal: action.payload };
        default:
            return state;
    }
};

const initRobotsState = {
    isFetching: false,
    robots: [],
    err: ''
}

export const requestRobots = (state = initRobotsState, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_FETCHING:
            return { ...state, isFetching: true };
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isFetching: false };
        case REQUEST_ROBOTS_FAIL:
            return { ...state, err: action.payload, isFetching: false };
        default:
            return state;
    }
};