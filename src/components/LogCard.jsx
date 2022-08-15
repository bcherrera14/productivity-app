import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

function LogCard({ item }) {
	let sleepTime = item.hours + item.minutes / 60;
	sleepTime = sleepTime.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className="card log-card mb-3">
			<div className="d-flex align-items-center">
				<div className="daily-stat d-flex flex-column align-items-center">
					<p className="m-0">Head : {item.rating}</p>
					<p className="m-0">bed : {sleepTime}</p>
				</div>
				<div className="ms-4">{item.text}</div>
				<div className="card-btns ms-auto me-3 align-self-start">
					<FaCircle />
					<FaCircle className="ms-1" />
				</div>
			</div>
		</div>
	);
}

export default LogCard;
