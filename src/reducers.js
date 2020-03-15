import { CHANGE_SEARCH_FIELD } from './constants';

const initState = {
    searchInputVal: '',
};

export const searchRobots = (state=initState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchInputVal: action.payload };
        default:
            return state;
    }
};