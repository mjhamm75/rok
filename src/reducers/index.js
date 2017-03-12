import { combineReducers } from 'redux';
import selectedItems from './glass';
import token from './token';
import username from './username';
import toggleCart from './toggleCart';
import clear from './clear';
import charge from './charge';
import panels from './panels';
import paths from './paths';
import popup from './popup';
import spinner from './spinner';
import svgs from './svg';
import svgMapping from './svgMapping';
import svgTitle from './svgTitle';
import chargeButtonEnabled from './chargeButtonEnabled';

const rootReducer = combineReducers({
	charge,
	chargeButtonEnabled,
	clear,
	selectedItems,
	panels,
	paths,
	popup,
	spinner,
	svgMapping,
	svgs,
	svgTitle,
	token,
	toggleCart,
	username
});

export default rootReducer;
