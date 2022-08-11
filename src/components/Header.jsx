import React from 'react';
import Brain from './assets/brain-regular-white.svg';

function Header() {
	return (
		<header>
			<div className="container d-flex justify-content-center">
				<img className="brain-icon me-3" src={Brain} alt="image" /> Productivity Tracker
			</div>
		</header>
	);
}

export default Header;
