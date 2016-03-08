import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';

const rootReducer = combineReducers({
  selectedItems,
  token,
  username
});

export default rootReducer;
