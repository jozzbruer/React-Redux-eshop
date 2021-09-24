import React from 'react';
import { useSelector } from 'react-redux';

function Product() {
	const products = useSelector((state) => state.allProducts.products);
	const productList = products.map((product) => {
		return (
			<div key={product.id} className='four column wide'>
				<div className='ui link cards'>
					<div className='card'>
						<div className='image'>
							<img src={product.image} alt={product.title} />
						</div>
						<div className='content'>
							<div className='header'>{product.itle}</div>
							<div className='meta price'>$ {product.price}</div>
							<div className='meta'>{product.ategory}</div>
						</div>
					</div>
				</div>
			</div>
		);
	});
	return <>{productList}</>;
}

export default Product;
