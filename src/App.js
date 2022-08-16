import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductivityForm from './components/ProductivityForm';
import Stats from './components/Stats';
import LogCard from './components/LogCard';
import LogList from './components/LogList';

function App() {
	const [ logs, setLogs ] = useState([]);

	const addPriority = (item) => {
		setLogs([ item, ...logs ]);
		localStorage.setItem('logData', JSON.stringify([ item, ...logs ]));
	};

	useEffect(() => {
		let storedLogs = localStorage.getItem('logData');
		if (storedLogs != null) {
			setLogs(JSON.parse(storedLogs));
		}
	}, []);

	return (
		<div>
			<Header />
			<div className="container d-flex flex-column align-items-center">
				<ProductivityForm addPriority={addPriority} />
				<Stats logs={logs} />
				<LogList logList={logs} />
			</div>
		</div>
	);
}

export default App;
