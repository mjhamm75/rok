import { HIDE_SPINNER, SHOW_SPINNER } from '../constants/ActionTypes';

export default function charge(state = false, action) {
  switch (action.type) {
	case SHOW_SPINNER:
		return true;
  case HIDE_SPINNER:
    return false;
	default:
		return state;
  }
}
