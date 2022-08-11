import React from 'react';
import { useState } from 'react';

function RatingSelect() {
	const [ selected, setselected ] = useState(10);

	const handleChange = (e) => {
		console.log(+e.target.value);
		setselected(+e.target.value);
	};

	return (
		<div className="d-flex justify-content-around w-50">
			<input
				type="radio"
				class="btn-check"
				id="btn-check1"
				autocomplete="off"
				value={1}
				checked={selected === 1}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check1">
				1
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check2"
				autocomplete="off"
				value={2}
				checked={selected === 2}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check2">
				2
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check3"
				autocomplete="off"
				value={3}
				checked={selected === 3}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check3">
				3
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check4"
				autocomplete="off"
				value={4}
				checked={selected === 4}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check4">
				4
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check5"
				autocomplete="off"
				value={5}
				checked={selected === 5}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check5">
				5
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check6"
				autocomplete="off"
				value={6}
				checked={selected === 6}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check6">
				6
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check7"
				autocomplete="off"
				value={7}
				checked={selected === 7}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check7">
				7
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check8"
				autocomplete="off"
				value={8}
				checked={selected === 8}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check8">
				8
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check9"
				autocomplete="off"
				value={9}
				checked={selected === 9}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check9">
				9
			</label>
			<input
				type="radio"
				class="btn-check"
				id="btn-check0"
				autocomplete="off"
				value={10}
				checked={selected === 10}
				onChange={handleChange}
			/>
			<label class="btn btn-light rounded-circle shadow-none" for="btn-check0">
				10
			</label>
		</div>
	);
}

export default RatingSelect;
