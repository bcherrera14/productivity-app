import React from 'react';
import Brain from './assets/brain-regular-white.svg';
import Bed from './assets/bed-solid.svg';
import EditBtn from './assets/pen-circle.svg';
import DeleteBtn from './assets/circle-xmark.svg';

function LogCard({ item, deletePriority, editPriority }) {
	let sleepTime = item.hours + item.minutes / 60;
	sleepTime = sleepTime.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className="card log-card mb-3">
			<div className="d-flex align-items-center">
				<div className="daily-stat d-flex flex-column align-items-start">
					<p className="m-0 text-nowrap">
						<img src={Brain} alt="head" /> : {item.rating}
					</p>
					<p className="m-0 text-nowrap">
						<img src={Bed} alt="head" /> : {sleepTime}
					</p>
				</div>
				<div className="ms-4">{item.text}</div>
				<div className="ms-auto me-3 align-self-start text-secondary">
					<p className="m-0 d-none d-lg-block">{item.date}</p>
				</div>
				<div className="card-btns align-self-start text-nowrap">
					<img src={EditBtn} alt="edit" onClick={() => editPriority(item)} />
					<span className="p-1" />
					<img src={DeleteBtn} alt="delete" onClick={() => deletePriority(item.id)} />
				</div>
			</div>
		</div>
	);
}

export default LogCard;
