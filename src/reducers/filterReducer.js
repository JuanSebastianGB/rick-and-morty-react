import { SET_SEARCH } from '../types';

const initialState = {
  search: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
