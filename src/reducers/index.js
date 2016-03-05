import { combineReducers } from 'redux';
import counter from './counter';
import selectedItems from './glass';

const rootReducer = combineReducers({
  counter,
  selectedItems
});

export default rootReducer;
