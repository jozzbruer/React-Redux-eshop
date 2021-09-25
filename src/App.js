import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import ProductListing from './components/ProductListing';
import './App.css';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact>
						<ProductListing />
					</Route>
					<Route path='/product/:productId' exact>
						<ProductItem />
					</Route>
					<Route>404 not found</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
