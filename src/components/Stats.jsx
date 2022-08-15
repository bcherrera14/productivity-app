import React from 'react';

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
			<p>Average Productivity : {isNaN(averageRating) ? 0 : averageRating}</p>
			<p>Averge Hours of Sleep : {isNaN(averageSleep) ? 0 : averageSleep}</p>
		</div>
	);
}

export default Stats;
