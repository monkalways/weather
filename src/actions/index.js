import axios from 'axios';

const API_KEY = '3f7dae91b06b25542753a647d7a30b81';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const SEARCH_STARTED = 'SEARCH_STARTED';
export const SEARCH_COMPLETED = 'SEARCH_COMPLETED';
export const TERM_CHANGED = 'TERM_CHANGED';

export const startSearch = (term) => {
    return (dispatch) => {
        dispatch(searchStarted(term));
        axios.get(`${ROOT_URL}&q=${term}`)
            .then(response => response.data)
            .then(data => dispatch(searchCompleted(data)));
    }
};

export const changeTerm = (term) => ({
    type: TERM_CHANGED,
    term: term
});

export const searchStarted = (term) => ({
    type: SEARCH_STARTED,
    term: term
})

export const searchCompleted = (searchResult) => ({
    type: SEARCH_COMPLETED,
    city: searchResult
});