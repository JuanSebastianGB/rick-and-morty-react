import { INCREMENT_PAGE_NUMBER, SET_PAGE } from '../types';

const initialState = 1;
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_PAGE_NUMBER:
      return state + 1;
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default pageReducer;
