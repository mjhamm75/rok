import { ADD_SELECTED_GLASS, REMOVE_SELECTED_GLASS } from '../constants/ActionTypes';

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