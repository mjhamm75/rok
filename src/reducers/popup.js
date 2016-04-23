import { POPUP_ON, POPUP_OFF } from '../constants/ActionTypes';

export default function charge(state = false, action) {
  switch (action.type) {
	case POPUP_ON:
		return true;
  case POPUP_OFF:
    return false;
	default:
		return state;
  }
}
