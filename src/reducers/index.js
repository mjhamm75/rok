import { combineReducers } from 'redux';
import counter from './counter';
import selectedGlass from './glass';

const rootReducer = combineReducers({
  counter,
  selectedGlass
});

export default rootReducer;
