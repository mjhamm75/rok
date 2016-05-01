import { CLEAR_DONATION_FORM } from '../constants/ActionTypes';

export default function chargeButtonEnabled(state=false, action) {
	switch (action.type) {
		case CLEAR_DONATION_FORM:
			return action.shouldClear;
		default:
			return state;
	}
}
