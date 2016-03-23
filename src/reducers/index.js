import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';
import toggleCart from './toggleCart';
import charge from './charge';
import svg from './svg';

const rootReducer = combineReducers({
	charge,
	selectedItems,
	svg,
	token,
	toggleCart,
	username
});

export default rootReducer;
