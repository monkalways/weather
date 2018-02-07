import { SEARCH_RESULTS_RETURNED } from '../actions/index';

const defaultWeatherReducerState = [];

const weatherReducer = (state = defaultWeatherReducerState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS_RETURNED:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
};

export default weatherReducer;