import { browserHistory } from 'react-router';
import { ADD_SELECTED_GLASS, REMOVE_SELECTED_GLASS, LOGIN } from '../constants/ActionTypes';
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
		}).catch(err => console.log(err))
	}
}