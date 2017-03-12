import { SET_PANELS } from '../constants/ActionTypes';

export default function paths(state={}, action) {
	switch (action.type) {
		case 'SET_PANELS':
			return {...action.panels};
		default:
			return state;
	}
}
