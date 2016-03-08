import { browserHistory } from 'react-router';
import { ADD_SELECTED_GLASS, REMOVE_SELECTED_GLASS, LOGIN, EMAIL_UDPATED, UPDATE_TOKEN, USER_CREATED } from '../constants/ActionTypes';
import axios from 'axios';

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
			methodd: 'POST',
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