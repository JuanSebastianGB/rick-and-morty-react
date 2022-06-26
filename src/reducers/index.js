import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';

const reducer = combineReducers({
  results: resultsReducer,
});

export default reducer;
