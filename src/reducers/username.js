import { VALIDATE_USERNAME } from '../constants/ActionTypes';

export default function username(state = false, action) {	
	switch(action.type) {
		case VALIDATE_USERNAME: 
			return action.count > 0;
		default:
			return state;
	}
}