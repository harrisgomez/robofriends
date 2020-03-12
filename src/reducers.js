import { CHANGE_SEARCH_FIELD } from './constants';

const initState = {
    searchField: ''
};

export const searchRobots = (state=initState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};