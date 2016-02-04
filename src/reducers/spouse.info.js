export default function spouseInfo(state = {}, action) {
	switch(action.type) {
		case "UPDATE_SPOUSE_INFO":
			state[action.key] = action.value;
			return Object.assign({}, state);
		case "SYNC_ADDRESS":
			return Object.assign({}, state, action.address);
		default:
			return state;
	}
}