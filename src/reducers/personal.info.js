let defaultState = {
	name: null,
	ssn: null,
	dob: null,
	email: null,
	street1: null,
	street2: null,
	city: null,
	state: null,
	zipcode: null,
	marriage: null
}

export default function personalInfo(state = defaultState, action) {
	switch(action.type) {
		case "UPDATE_PERSONAL_INFO":
			state[action.key] = action.value;
			return Object.assign({}, state);
		default:
			return state;
	}
}