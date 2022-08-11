import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import RatingSelect from './RatingSelect';

function ProductivityForm() {
	return (
		<Card body className="w-75">
			<Form>
				<RatingSelect />
				<h2 className="text-center mb-4">How much sleep did you get?</h2>
				<Row className="justify-content-center mb-4">
					<Form.Group className="time-select">
						<InputGroup className="mb-3">
							<InputGroup.Text id="basic-addon1">HRS</InputGroup.Text>
							<Form.Select aria-label="Small" size="lg" type="text">
								<option />
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
							<Form.Select size="lg" type="text">
								<option />
								<option>15</option>
								<option>30</option>
								<option>45</option>
							</Form.Select>
						</InputGroup>
					</Form.Group>
				</Row>

				<h2 className="text-center mb-4">What is your number one priority for today?</h2>
				<InputGroup className="mb-4 px-4">
					<Form.Control
						size="lg"
						placeholder="My number one priority is..."
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						as="textarea"
					/>
					<Button variant="secondary" id="button-addon2">
						Send
					</Button>
				</InputGroup>
			</Form>
		</Card>
	);
}

export default ProductivityForm;
