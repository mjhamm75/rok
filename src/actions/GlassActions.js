import { ADD_SELECTED_GLASS } from '../constants/ActionTypes';

export function updateSelectedGlass(panelName, glassId, amount){
	return {
		type: ADD_SELECTED_GLASS,
		panelName,
		glassId,
		amount
	}
}