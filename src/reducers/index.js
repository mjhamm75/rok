import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';
import toggleCart from './toggleCart';

const rootReducer = combineReducers({
  selectedItems,
  token,
  toggleCart,
  username
});

export default rootReducer;
