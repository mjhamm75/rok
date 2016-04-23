import axios from 'axios';
import { browserHistory } from 'react-router';
import { ADD_SELECTED_GLASS, POPUP_ON, POPUP_OFF, CHARGE, EMAIL_UDPATED, HIDE_SPINNER, LOGIN, OPEN_CART, REMOVE_SELECTED_GLASS, SVG_RETREIVED, UPDATE_TOKEN, USER_CREATED, SHOW_THANK_YOU, SHOW_SPINNER, SVGS_RETRIEVED, SVG_SAVED, VALIDATE_USERNAME } from '../constants/ActionTypes';

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
			localStorage['token'] = res.data.token;
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
		var token = localStorage['token'];
		axios({
			url: '/create-user',
			method: 'POST',
			data: {
				username,
				password
			},
			headers: {
				'x-access-token': token
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
		var token = localStorage['token'];
		axios({
			method: 'GET',
			url: '/username',
			params: {
				username
			},
			headers: {
				'x-access-token': token
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

export function openCheckout(shouldOpen) {
	return {
		type: OPEN_CART,
		shouldOpen
	}
}

export function charge(token, amount, email, selectedItems) {
	return dispatch => {
		axios.post('/charge', {
			amount,
			email,
			token,
			selectedItems
		}).then(result => {
			dispatch(chargeComplete(result.data))
		})
	}
}

function chargeComplete(charged) {
	return {
		type: CHARGE,
		charged
	}
}

function svgSaved() {
	return {
		type: SVG_SAVED
	}
}

export function saveSVG(title, paths) {
	return (dispatch, state) => {
		var token = localStorage['token'];
		axios({
			method: 'POST',
			url: '/svg',
			data: {
				title,
				paths
			},
			headers: {
				'x-access-token': token
			}
		}).then(result => {
			dispatch(svgSaved());
		})

	}
}

function svgRetrieved(paths) {
	return {
		type: SVG_RETREIVED,
		paths
	}
}

export function getPathInfo(svgName) {
	return dispatch => {
		axios.get(`/paths/${svgName}`)
			.then(paths => {
				dispatch(svgRetrieved(paths.data.paths))
			});
	}
}

export function getSvgs() {
	return dispatch => {
		var token = localStorage['token'];
		axios.get('/svgs', {
			headers: {
				'x-access-token': token
			}
		})
		.then(svgs => {
			dispatch(svgsRetrieved(svgs.data.svgs));
		})
	}
}

function svgsRetrieved(svgs) {
	return {
		type: SVGS_RETRIEVED,
		svgs
	}
}

function showSpinner() {
	return {
		type: SHOW_SPINNER
	}
}

function hideSpinner() {
	return {
		type: HIDE_SPINNER
	}
}

export function amountsSavedToggle() {
	return dispatch => {
		dispatch({type: POPUP_ON})
		setTimeout(() => {
			dispatch({type: POPUP_OFF})
		}, 1000)
	}
}

export function saveAmounts(glassName, paths) {
	var token = localStorage['token'];
	return (dispatch, state) => {
		dispatch(showSpinner())
		axios({
			url: `/paths/${glassName}`,
			method: 'POST',
			data: {
				paths
			},
			headers: {
				'x-access-token': token
			}
		}).then(res => {
			dispatch(hideSpinner())
			dispatch(amountsSavedToggle())
			console.log(res);
		})
	}
}
