import React from 'react';
import { useState } from 'react';

function RatingSelect({ selected, select }) {
	const handleChange = (e) => {
		select(+e.target.value);
	};

	return (
		<div className="d-flex flex-column align-items-center mt-4 mb-4">
			<h4 className="text-center mb-4">What would your rate your productivity for today?</h4>
			<div className="row justify-content-center w-100">
				<input
					type="radio"
					className="btn-check"
					id="btn-check1"
					autoComplete="off"
					value={1}
					checked={selected === 1}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check1">
					1
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check2"
					autoComplete="off"
					value={2}
					checked={selected === 2}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check2">
					2
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check3"
					autoComplete="off"
					value={3}
					checked={selected === 3}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check3">
					3
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check4"
					autoComplete="off"
					value={4}
					checked={selected === 4}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check4">
					4
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check5"
					autoComplete="off"
					value={5}
					checked={selected === 5}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check5">
					5
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check6"
					autoComplete="off"
					value={6}
					checked={selected === 6}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check6">
					6
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check7"
					autoComplete="off"
					value={7}
					checked={selected === 7}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check7">
					7
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check8"
					autoComplete="off"
					value={8}
					checked={selected === 8}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check8">
					8
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check9"
					autoComplete="off"
					value={9}
					checked={selected === 9}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check9">
					9
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check0"
					autoComplete="off"
					value={10}
					checked={selected === 10}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check0">
					10
				</label>
			</div>
			{/* <div className="d-flex justify-content-around w-100 flex-wrap">
				<input
					type="radio"
					className="btn-check"
					id="btn-check1"
					autoComplete="off"
					value={1}
					checked={selected === 1}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check1">
					1
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check2"
					autoComplete="off"
					value={2}
					checked={selected === 2}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check2">
					2
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check3"
					autoComplete="off"
					value={3}
					checked={selected === 3}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check3">
					3
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check4"
					autoComplete="off"
					value={4}
					checked={selected === 4}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check4">
					4
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check5"
					autoComplete="off"
					value={5}
					checked={selected === 5}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check5">
					5
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check6"
					autoComplete="off"
					value={6}
					checked={selected === 6}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check6">
					6
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check7"
					autoComplete="off"
					value={7}
					checked={selected === 7}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check7">
					7
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check8"
					autoComplete="off"
					value={8}
					checked={selected === 8}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check8">
					8
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check9"
					autoComplete="off"
					value={9}
					checked={selected === 9}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check9">
					9
				</label>
				<input
					type="radio"
					className="btn-check"
					id="btn-check0"
					autoComplete="off"
					value={10}
					checked={selected === 10}
					onChange={handleChange}
				/>
				<label className="btn btn-light rounded-circle shadow-none" htmlFor="btn-check0">
					10
				</label>
			</div> */}
		</div>
	);
}

export default RatingSelect;
