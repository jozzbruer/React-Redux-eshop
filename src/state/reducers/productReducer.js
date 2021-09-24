import { actionTypes } from '../constants/action-types';

const initialState = { products: [] };

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_PRODUCTS:
			return { ...state, products: action.payload };
		default:
			return state;
	}
};

export default productReducer;
