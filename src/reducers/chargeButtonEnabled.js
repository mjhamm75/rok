import { CHARGE_BUTTON_ENABLED } from '../constants/ActionTypes';

export default function chargeButtonEnabled(state=true, action) {
	switch (action.type) {
		case CHARGE_BUTTON_ENABLED:
			return action.enabled;
		default:
			return state;
	}
}
