import { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductivityForm from './components/ProductivityForm';
import Stats from './components/Stats';
import LogList from './components/LogList';

function App() {
	const [ logs, setLogs ] = useState([]);
	const [ editLog, setEditLog ] = useState({
		item: {},
		edit: false
	});

	const addPriority = (item) => {
		setLogs([ item, ...logs ]);
		localStorage.setItem('logData', JSON.stringify([ item, ...logs ]));
	};

	const deletePriority = (id) => {
		const result = logs.filter((item) => item.id !== id);
		setLogs(result);
		localStorage.setItem('logData', JSON.stringify(result));
	};

	const editPriority = (item) => {
		// console.log('Edit', item);
		setEditLog({
			item,
			edit: true
		});
	};

	const updatePriority = (id, item) => {
		const updatedLogs = logs.map((log) => (log.id === id ? { ...log, ...item } : log));
		console.log(updatedLogs);
		setLogs(updatedLogs);
		localStorage.setItem('logData', JSON.stringify(updatedLogs));
		setEditLog({
			item: {},
			edit: false
		});
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
				<ProductivityForm addPriority={addPriority} edit={editLog} updatePriority={updatePriority} />
				<Stats logs={logs} />
				<LogList logList={logs} deletePriority={deletePriority} editPriority={editPriority} />
			</div>
		</div>
	);
}

export default App;
