import Header from './components/Header';
import ProductivityForm from './components/ProductivityForm';
import Stats from './components/Stats';

function App() {
	return (
		<div>
			<Header />
			<div className="container d-flex flex-column align-items-center">
				<ProductivityForm />
				<Stats />
			</div>
		</div>
	);
}

export default App;
