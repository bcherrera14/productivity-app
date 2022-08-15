import React from 'react';
import { NavItem } from 'react-bootstrap';
import LogCard from './LogCard';

function LogList({ logList }) {
	const data = [
		{
			rating: 8,
			hours: 8,
			minutes: 0,
			text: 'This is sample text number 1',
			id: '1'
		},
		{
			rating: 4,
			hours: 5,
			minutes: 30,
			text: 'This is sample text number 2',
			id: '2'
		},
		{
			rating: 7,
			hours: 7,
			minutes: 45,
			text: 'This is sample text number 3',
			id: '3'
		}
	];

	if (logList.length > 0) {
		return <div className="w-100">{logList.map((item) => <LogCard key={item.id} item={item} />)}</div>;
	}

	return <div className="w-100 text-white">There are no entries.</div>;
}

export default LogList;
