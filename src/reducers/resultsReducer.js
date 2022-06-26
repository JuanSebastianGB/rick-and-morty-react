import { SET_RESULTS } from '../types';

const initialState = {
  results: [],
};
const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default resultsReducer;
