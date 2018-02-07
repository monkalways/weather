import { SEARCH_COMPLETED, SEARCH_STARTED, TERM_CHANGED } from '../actions/index';

const defaultWeatherReducerState = {
    cities: [],
    term: '',
    loading: false
};

const weatherReducer = (state = defaultWeatherReducerState, action) => {
    switch (action.type) {
        case TERM_CHANGED:
            return {
                ...state,
                term: action.term
            };
        case SEARCH_STARTED:
            return {
                ...state,
                loading: true,
                term: action.term
            };
        case SEARCH_COMPLETED:
            return {
                cities: [
                    ...state.cities,
                    action.city
                ],
                loading: false,
                term: ''
            };
        default:
            return state;
    }
};

export default weatherReducer;