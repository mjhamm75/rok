import { UPDATE_TOKEN } from '../constants/ActionTypes';

export default function token(state = {}, action) {	
	debugger;
	switch(action.type) {
		case UPDATE_TOKEN: 
			return action.token;
		default:
			return state;
	}
}