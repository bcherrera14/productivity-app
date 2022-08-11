import React from 'react';

function HourSelect() {
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	return <div className="d-flex flex-column mb-4" />;
}

export default HourSelect;
