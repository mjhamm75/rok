import { SVG_RETREIVED } from '../constants/ActionTypes';

export default function paths(state=[], action) {
	switch (action.type) {
		case SVG_RETREIVED:
			return action.paths;
		default:;
			return state;
	}
}
