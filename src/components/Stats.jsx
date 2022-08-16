import React from 'react';
import Brain from './assets/brain-regular-white.svg';
import Bed from './assets/bed-solid.svg';

function Stats({ logs }) {
	let averageRating =
		logs.reduce((acc, cur) => {
			return acc + cur.rating;
		}, 0) / logs.length;

	averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '');

	let averageSleep =
		logs.reduce((acc, cur) => {
			if (cur.minutes !== 0) {
				return acc + cur.hours + cur.minutes / 60;
			}
			return acc + cur.hours;
		}, 0) / logs.length;

	averageSleep = averageSleep.toFixed(1).replace(/[.,]0$/, '');

	return (
		<div className="d-flex justify-content-between stats-header w-100 mt-3">
			<p className="d-flex">
				<span className="d-none d-lg-block">Average Productivity</span>
				<span className="d-lg-none">
					<img src={Brain} alt="head" width={22} />
				</span>
				<span className="ps-1">: {isNaN(averageRating) ? 0 : averageRating}</span>
			</p>
			<p className="d-flex">
				<span className="d-none d-lg-block">Averge Hours of Sleep</span>
				<span className="d-lg-none">
					<img src={Bed} alt="bed" width={22} />
				</span>
				<span className="ps-1">: {isNaN(averageSleep) ? 0 : averageSleep}</span>
			</p>
		</div>
	);
}

export default Stats;
