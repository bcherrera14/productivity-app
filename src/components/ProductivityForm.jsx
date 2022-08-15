import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import RatingSelect from './RatingSelect';

function ProductivityForm({ addPriority }) {
	const [ rating, setRating ] = useState(10);
	const [ hours, setHours ] = useState('');
	const [ minutes, setMinutes ] = useState('');
	const [ btnDisabled, setBtnDisabled ] = useState(true);
	const [ text, setText ] = useState('');

	const handleHourChange = (e) => {
		console.log(+e.target.value);
		setHours(+e.target.value);

		if (
			text.trim().length >= 10 &&
			document.getElementById('hourSelect').value !== 'default' &&
			document.getElementById('minuteSelect').value !== 'default'
		) {
			setBtnDisabled(false);
		} else {
			setBtnDisabled(true);
		}
	};

	const handleMinuteChange = (e) => {
		console.log(+e.target.value);
		setMinutes(+e.target.value);

		if (
			text.trim().length >= 10 &&
			document.getElementById('hourSelect').value !== 'default' &&
			document.getElementById('minuteSelect').value !== 'default'
		) {
			setBtnDisabled(false);
		} else {
			setBtnDisabled(true);
		}
	};

	const handleTextChange = (e) => {
		let text = e.target.value;

		if (text === '' || text.trim().length < 10) {
			setBtnDisabled(true);
		} else if (
			text.trim().length >= 10 &&
			document.getElementById('hourSelect').value !== 'default' &&
			document.getElementById('minuteSelect').value !== 'default'
		) {
			setBtnDisabled(false);
		}
		setText(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newPriorityLog = {
				text,
				hours,
				minutes,
				rating
			};

			// console.log(newPriorityLog);
			addPriority(newPriorityLog);

			setBtnDisabled(true);
			setText('');
			setRating(10);
			setMinutes('');
			setHours('');
			document.getElementById('hourSelect').value = 'default';
			document.getElementById('minuteSelect').value = 'default';
		}
	};

	return (
		<Card body className="w-100">
			<Form onSubmit={handleSubmit}>
				<RatingSelect selected={rating} select={setRating} />
				<h4 className="text-center mb-4">How much sleep did you get?</h4>
				<Row className="justify-content-center mb-4">
					<Form.Group className="time-select">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">HRS</InputGroup.Text>
							<Form.Select
								id="hourSelect"
								aria-label="Small"
								size="sm"
								type="text"
								onChange={handleHourChange}
								autoComplete="off"
							>
								<option value="default" />
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
								<option>11</option>
								<option>12</option>
							</Form.Select>
						</InputGroup>
					</Form.Group>

					<Form.Group className="time-select">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon2">MINS</InputGroup.Text>
							<Form.Select id="minuteSelect" size="sm" type="text" onChange={handleMinuteChange}>
								<option value="default" />
								<option>0</option>
								<option>15</option>
								<option>30</option>
								<option>45</option>
							</Form.Select>
						</InputGroup>
					</Form.Group>
				</Row>

				<h4 className="text-center mb-4">What is your number one priority for today?</h4>
				<Row className="justify-content-center mb-4">
					<Col lg={8} className="p-0">
						<Form.Control
							size="sm"
							placeholder="My number one priority is..."
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							onChange={handleTextChange}
							value={text}
						/>
					</Col>
				</Row>
				<div className="row justify-content-center">
					<Button
						type="submit"
						variant="light"
						size="sm"
						className="col-lg-8 btn-send"
						disabled={btnDisabled}
					>
						Send
					</Button>
				</div>
			</Form>
		</Card>
	);
}

export default ProductivityForm;
