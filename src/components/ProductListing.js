import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { bindActionCreators } from 'redux';
import { actionsCreators } from '../state/index';

function ProductListing() {
	const products = useSelector((state) => state.allProducts);
	const dispatch = useDispatch();
	// const { setProducts } = bindActionCreators({
	// 	actionsCreators,
	// 	dispatch,
	// });
	function getProducts() {
		axios
			.get('https://fakestoreapi.com/products/')
			.then((response) => {
				dispatch(actionsCreators.setProducts(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='ui grid container'>
			<Product />
		</div>
	);
}

export default ProductListing;
