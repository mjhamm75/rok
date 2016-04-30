import { UPDATE_SVG_NAME } from '../constants/ActionTypes';

export default function paths(state="", action) {
	switch (action.type) {
		case UPDATE_SVG_NAME:
			return action.svgName;
		default:
			return state;
	}
}
