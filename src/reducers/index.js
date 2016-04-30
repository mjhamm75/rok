import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';
import toggleCart from './toggleCart';
import charge from './charge';
import paths from './paths';
import popup from './popup';
import spinner from './spinner';
import svgs from './svg';
import svgTitle from './svgTitle';

const rootReducer = combineReducers({
	charge,
	selectedItems,
	paths,
	popup,
	spinner,
	svgTitle,
	svgs,
	token,
	toggleCart,
	username
});

export default rootReducer;
