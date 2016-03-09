import axios from 'axios';
import { browserHistory } from 'react-router';
import { ADD_SELECTED_GLASS, EMAIL_UDPATED, LOGIN, REMOVE_SELECTED_GLASS, UPDATE_TOKEN, USER_CREATED, VALIDATE_USERNAME } from '../constants/ActionTypes';

export function updateSelectedGlass(panelName, glassId, amount){
	return {
		type: ADD_SELECTED_GLASS,
		panelName,
		glassId,
		amount
	}
}

export function removeSelectedGlass(panelName, glassId){
	return {
		type: REMOVE_SELECTED_GLASS,
		panelName,
		glassId,
	}
}

export function login(username, password) {
	return dispatch => {
		axios.post('log-in', {
			username: username, 
			password: password
		}).then(res => {
			browserHistory.push('/admin');
			return dispatch(updateToken(res.data.token));
		}).catch(err => console.log(err))
	}
}

export function updateEmailCreds(username, password) {
	return dispatch => {
		axios.post('/update-email', {
			username,
			password
		}).then(res => {
			return {
				type: EMAIL_UDPATED
			}
		}).catch(err => console.log(err));
	}
}

export function updateToken(token) {
	return {
		type: UPDATE_TOKEN,
		token
	}
}

export function createNewUser(username, password) {
	return (dispatch, state) => {
		axios({
			url: '/create-user',
			method: 'POST',
			data: {
				username,
				password
			},
			headers: {
				'x-access-token': state.token
			}
		}).then(res => {
			return {
				type: USER_CREATED
			}
		})
	}
}

export function checkUsername(username) {
	return (dispatch, state) => {
		console.log(username)
		axios({
			method: 'GET',
			url: '/username',
			params: {
				username
			},
			headers: {
				'x-access-token': state().token
			}
		}).then(res => {
			dispatch(validateUsername(res.data.count))
		})
	}
}

function validateUsername(count) {
	return {
		type: VALIDATE_USERNAME,
		count
	}
}