function createNestedObject(state, type, key, value) {
	if(!state[type]) {
		state[type] = {};
	}
	state[type][key] = value;
	return state;
}

export default function employmentInfo(state = {}, action) {
	switch(action.type) {
		case "UPDATE_EMPLOYMENT_INFO":
			state = createNestedObject(state, action.employmentType, action.key, action.value);
			return Object.assign({}, state);
		default:
			return state;
	}
}