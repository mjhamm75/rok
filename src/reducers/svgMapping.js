import { SET_SVG } from '../constants/ActionTypes';

export default function paths(state="", action) {
	switch (action.type) {
		case SET_SVG:
			return action.svg;
		default:
			return state;
	}
}
