import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

function LogCard() {
	return (
		<div className="card log-card w-100">
			<div className="d-flex align-items-center">
				<div className="daily-stat d-flex flex-column align-items-center">
					<p className="m-0">Head : 8.7</p>
					<p className="m-0">bed : 8</p>
				</div>
				<div className="ms-4">My priority of the day is.</div>
				<div className="card-btns ms-auto me-3 align-self-start">
					<FaCircle />
					<FaCircle className="ms-1" />
				</div>
			</div>
		</div>
	);
}

export default LogCard;
