import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductivityForm from './components/ProductivityForm';
import Stats from './components/Stats';
import LogCard from './components/LogCard';
import LogList from './components/LogList';

function App() {
	const [ logs, setLogs ] = useState([]);

	const addPriority = (item) => {
		setLogs([ ...logs, item ]);
	};

	useEffect(
		() => {
			console.log(logs);
		},
		[ logs ]
	);

	return (
		<div>
			<Header />
			<div className="container d-flex flex-column align-items-center">
				<ProductivityForm addPriority={addPriority} />
				<Stats logs={logs} />
				<LogList />
			</div>
		</div>
	);
}

export default App;
