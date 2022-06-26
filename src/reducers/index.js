import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import pageReducer from './pageReducer';
import resultsReducer from './resultsReducer';

const reducer = combineReducers({
  results: resultsReducer,
  page: pageReducer,
  filter: filterReducer,
});

export default reducer;
