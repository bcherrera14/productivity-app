import React from 'react';
import RatingSelect from './RatingSelect';

function ProductivityForm() {
	return (
		<div className="card d-flex flex-column align-items-center">
			<h2>What would your rate your productivity for today?</h2>
			<RatingSelect />
			<h2>How many hours of sleep did you get?</h2>
			<h2>WHat is your number one priority for today?</h2>
		</div>
	);
}

export default ProductivityForm;
