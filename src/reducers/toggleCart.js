import { OPEN_CART } from '../constants/ActionTypes';

export default function (state = false, action) {	
  switch (action.type) {
	case OPEN_CART:
		return action.shouldOpen;
	default:
		return state;
  }
}
