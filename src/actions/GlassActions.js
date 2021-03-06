import axios from 'axios';
import { browserHistory } from 'react-router';
import {
	ADD_SELECTED_GLASS,
	CHARGE_BUTTON_ENABLED,
	CLEAR_DONATION_FORM,
	CHARGE,
	CLEAR_CART,
	CLEAR_SVG,
	EMAIL_UDPATED,
	HIDE_SPINNER,
	LOGIN,
	OPEN_CART,
	POPUP_ON,
	POPUP_OFF,
	REMOVE_SELECTED_GLASS,
	RETRIEVE_SVG,
	SET_PANELS,
	SET_SVG,
	SVGS_RETRIEVED,
	SVG_SAVED,
	SHOW_SPINNER,
	SHOW_THANK_YOU,
	UPDATE_PATHS,
	UPDATE_SVG_NAME,
	UPDATE_TOKEN,
	USER_CREATED,
	VALIDATE_USERNAME,
} from '../constants/ActionTypes';

export function purchaseAll(title, purchaserName) {
	return dispatch => {
		var token = localStorage['token'];
		axios({
			url: `/purchase-all`,
			method: 'POST',
			data: {
				title,
				purchaserName
			},
			headers: {
				'x-access-token': token
			}
		}).then(res => {
			if(res.status === 200) {
				dispatch(getPanelsInfo());
			}
		})
	}
}

export function clearSvg() {
	return {
		type: CLEAR_SVG
	}
}

export function retrieveSvg(svgName) {
	return dispatch => {
		axios(`/svg-mapping/${svgName}.svg`).then(res => {
			dispatch({
				type: SET_SVG,
				svg: res.data
			});
		})
	}
}

export function clearDonationForm(shouldClear) {
	return {
		type: CLEAR_DONATION_FORM,
		shouldClear
	}
}

export function chargeButtonEnabled(isEnabled) {
		return {
			type: CHARGE_BUTTON_ENABLED,
			enabled: isEnabled
		}
}

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

export function clearCart() {
	return {
		type: CLEAR_CART,
	}
}

export function donate(token, total, email) {
	return dispatch => {
		axios.post('/donate', {
			email,
			token,
			total
		}).then(result => {
			dispatch(chargeComplete(true));
			dispatch(chargeButtonEnabled(true));
			dispatch(clearDonationForm(true));
		})
	}
}

export function charge(token, amount, email, selectedItems) {
	return (dispatch, state) => {
		let svgTitle = state().svgTitle;
		axios.post('/charge', {
			amount,
			email,
			token,
			svgTitle,
			selectedItems
		}).then(result => {
			axios.get(`/paths/${svgTitle}`).then(paths => {
				dispatch(clearCart());
				dispatch(updatePaths(paths.data.paths));
				dispatch(chargeComplete(true));
				dispatch(chargeButtonEnabled(true));
			})
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

function updatePaths(paths) {
	return {
		type: UPDATE_PATHS,
		paths
	}
}

function updateSvgName(svgName) {
	return {
		type: UPDATE_SVG_NAME,
		svgName
	}
}

export function getPathInfo(svgName) {
	return dispatch => {
		axios.get(`/paths/${svgName}`)
			.then(paths => {
				dispatch(updatePaths(paths.data.paths));
				dispatch(updateSvgName(svgName));
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
			if(svgs.data.svgs && svgs.data.svgs.length > 0) {
				dispatch(svgsRetrieved(svgs.data.svgs));
			}
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
		})
	}
}

export function getPanelsInfo() {
	return (dispatch, state) => {
		var token = localStorage['token'];
		axios({
			url: '/panels-info',
			method: 'GET',
			headers: {
				'x-access-token': token
			}
		})
			.then(res => {
				dispatch({
					type: 'SET_PANELS',
					panels: res.data.panels
				})
			})
	}
}
