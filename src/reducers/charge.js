import { CHARGE } from '../constants/ActionTypes';

export default function charge(state = false, action) {
  switch (action.type) {
	case CHARGE:
		return action.charged;
	default:
		return state;
  }
}
