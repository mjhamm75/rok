import { UPDATE_PATHS } from '../constants/ActionTypes';

export default function paths(state=[], action) {
	switch (action.type) {
		case UPDATE_PATHS:
			return [...action.paths];
		default:
			return state;
	}
}
