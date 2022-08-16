import React from 'react';
import { NavItem } from 'react-bootstrap';
import LogCard from './LogCard';

function LogList({ logList, deletePriority, editPriority }) {
	if (logList.length > 0) {
		return (
			<div className="w-100">
				{logList.map((item) => (
					<LogCard key={item.id} item={item} deletePriority={deletePriority} editPriority={editPriority} />
				))}
			</div>
		);
	}

	return <div className="w-100 text-white">There are no entries.</div>;
}

export default LogList;
