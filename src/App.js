import Header from './components/Header';
import ProductivityForm from './components/ProductivityForm';

function App() {
	return (
		<div>
			<Header />
			<div className="container d-flex justify-content-center">
				<ProductivityForm />
			</div>
		</div>
	);
}

export default App;
