import { SVG_RETREIVED } from '../constants/ActionTypes';

export default function svg(state = {
	svg: {},
	paths: []
}, action) {
	switch (action.type) {
		case SVG_RETREIVED:
			return action.svg;
		default:;
			return state;
	}
}
