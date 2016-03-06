import { ADD_SELECTED_GLASS, REMOVE_SELECTED_GLASS } from '../constants/ActionTypes';

export default function selectedItems(state = [], action) {	
  switch (action.type) {
	case ADD_SELECTED_GLASS:
		var piece = {
			id: action.glassId,
			name: action.panelName,
			amount: action.amount
		}
		return [...state, piece];
	case REMOVE_SELECTED_GLASS:
		let index = state.findIndex(glass => {
			return glass.id === action.glassId && glass.name === action.panelName; 
		})
		let before = state.slice(0, index);
		let after = state.slice(index + 1, state.length)
		return [...before, ...after];
	default:
		return state;
  }
}
