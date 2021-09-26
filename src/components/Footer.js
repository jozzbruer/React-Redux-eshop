import React from 'react';

function Footer() {
	return (
		<div className='footer'>
			<div className='ui container footcontainer'>
				&copy;{' '}
				<a
					href='https://www.linkedin.com/in/quince-joz-bruer-4a0488161/'
					target='_blank'
					rel='noreferrer'>
					Joz-Bruer Quince
				</a>
				<p>
					Ps: This app is using the{' '}
					<a href='https://fakestoreapi.com' target='_blank' rel='noreferrer'>
						<u>Fakestore Api</u>
					</a>{' '}
					for educational purpose only!
				</p>
			</div>
		</div>
	);
}

export default Footer;
