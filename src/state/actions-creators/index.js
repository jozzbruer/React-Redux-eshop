import { actionTypes } from '../constants/action-types';

export const selectedProducts = (products) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.SELECTED_PRODUCTS,
			payload: products,
		});
	};
};

export const setdProducts = (products) => {
	return (dispatch) => {
		dispatch({
			type: actionTypes.SET_PRODUCTS,
			payload: products,
		});
	};
};

// export const removeSelectedProducts = (products) => {
// 	return (dispatch) => {
// 		dispatch({
// 			type: actionTypes.REMOVE_SELECTED_PRODUCTS,
// 			payload: products,
// 		});
// 	};
// };
