// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const ERROR = "ERROR";
export const LOADING = "LOADING";


export const fetchData = () => dispatch => {
    console.log('I am running the fetch request')
    dispatch({ type: LOADING})
    axios.get('https://swapi.co/api/people/')
        .then(res =>  dispatch({ type: SUCCESS, payload: res.data.results }))
        .catch(err => dispatch({ type: ERROR, payload: err }))
};







// dispatch({ type: SUCCESS, payload: res.results })
