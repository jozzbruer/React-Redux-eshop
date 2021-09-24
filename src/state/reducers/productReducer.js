import { actionTypes } from '../constants/action-types';

const initialState = {
	products: [
		{
			id: 1,
			title: 'My programming Ebook',
			category: 'Programing',
			price: 20,
		},
	],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECTED_PRODUCTS:
			return state;
		default:
			return state;
	}
};

export default productReducer;
