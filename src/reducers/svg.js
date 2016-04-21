import { SVGS_RETRIEVED } from '../constants/ActionTypes';

export default function paths(state=[], action) {
	switch (action.type) {
		case SVGS_RETRIEVED:
			return action.svgs;
		default:
			return state;
	}
}
