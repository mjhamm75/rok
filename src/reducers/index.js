import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';

const rootReducer = combineReducers({
  selectedItems,
  token
});

export default rootReducer;
