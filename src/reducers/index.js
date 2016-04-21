import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';
import toggleCart from './toggleCart';
import charge from './charge';
import paths from './paths';
import svgs from './svg';

const rootReducer = combineReducers({
	charge,
	selectedItems,
	paths,
	svgs,
	token,
	toggleCart,
	username
});

export default rootReducer;
