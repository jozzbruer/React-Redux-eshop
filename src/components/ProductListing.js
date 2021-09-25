import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { actionsCreators } from '../state/index';

function ProductListing() {
	const products = useSelector((state) => state.allProducts);

	const dispatch = useDispatch();

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
			{products.products.length === 0 ? (
				<div className='ui spinner'>
					<div className='ui active inverted dimmer'>
						<div className='ui large text loader'></div>
					</div>
				</div>
			) : (
				<Product />
			)}
		</div>
	);
}

export default ProductListing;
