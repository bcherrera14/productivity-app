import React from 'react';
import Brain from './assets/brain-regular-white.svg';

function Header() {
	return (
		<header>
			<div className="container d-flex justify-content-center align-items-center">
				<img className="brain-icon me-3" src={Brain} alt="image" />{' '}
				<h3 className="m-0">Productivity Tracker</h3>
			</div>
		</header>
	);
}

export default Header;
