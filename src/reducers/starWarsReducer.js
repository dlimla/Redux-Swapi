import { LOADING, ERROR, SUCCESS } from "../actions";


const initialState = {
  characters: [],
  loading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: 
      return {...state, loading: true}
    case SUCCESS:
      return {...state, loading: false, characters: action.payload, error: ""}
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
