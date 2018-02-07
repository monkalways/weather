import axios from 'axios';

const API_KEY = '3f7dae91b06b25542753a647d7a30b81';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const SEARCH_RESULTS_RETURNED = 'SEARCH_RESULTS_RETURNED';

export const startSearch = (term) => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}&q=${term}`)
            .then(response => response.data)
            .then(data => dispatch(searchResultsReturned(data)));
    }
};

export const searchResultsReturned = (searchResults) => ({
    type: SEARCH_RESULTS_RETURNED,
    payload: searchResults
});