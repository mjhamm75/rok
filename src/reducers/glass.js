import { ADD_SELECTED_GLASS } from '../constants/ActionTypes';

export default function selectedItems(state = [], action) {	
  switch (action.type) {
	case ADD_SELECTED_GLASS:
		var piece = {
			id: action.glassId,
			name: action.panelName,
			amount: action.amount
		}
		return [...state, piece];
	default:
		return state;
  }
}
