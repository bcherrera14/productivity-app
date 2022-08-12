import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import RatingSelect from './RatingSelect';

function ProductivityForm() {
	const [ rating, setRating ] = useState(10);
	const [ hours, setHours ] = useState('');
	const [ minutes, setMinutes ] = useState('');
	const [ btnDisabled, setBtnDisabled ] = useState(true);
	const [ text, setText ] = useState('');

	const handleHourChange = (e) => {
		console.log(+e.target.value);
		setHours(+e.target.value);
	};

	const handleMinuteChange = (e) => {
		console.log(+e.target.value);
		setMinutes(+e.target.value);
	};

	const handleTextChange = (e) => {
		let text = e.target.value;

		if (text === '' || text.trim().length < 10) {
			setBtnDisabled(true);
		} else if (text.trim().length >= 10) {
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

			console.log(newPriorityLog);

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
		<Card body className="w-75">
			<Form onSubmit={handleSubmit}>
				<RatingSelect selected={rating} select={setRating} />
				<h2 className="text-center mb-4">How much sleep did you get?</h2>
				<Row className="justify-content-center mb-4">
					<Form.Group className="time-select">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">HRS</InputGroup.Text>
							<Form.Select
								id="hourSelect"
								aria-label="Small"
								size="lg"
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
							<Form.Select id="minuteSelect" size="lg" type="text" onChange={handleMinuteChange}>
								<option value="default" />
								<option>0</option>
								<option>15</option>
								<option>30</option>
								<option>45</option>
							</Form.Select>
						</InputGroup>
					</Form.Group>
				</Row>

				<h2 className="text-center mb-4">What is your number one priority for today?</h2>
				<Row className="justify-content-center mb-4">
					<Col lg={10} className="p-0">
						<Form.Control
							size="lg"
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
						size="lg"
						className="col-lg-10 btn-send"
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
