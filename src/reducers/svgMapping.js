import {
	CLEAR_SVG,
	SET_SVG
 } from '../constants/ActionTypes';

export default function paths(state="", action) {
	switch (action.type) {
		case SET_SVG:
			return action.svg;
		case CLEAR_SVG:
			return "";
		default:
			return state;
	}
}
