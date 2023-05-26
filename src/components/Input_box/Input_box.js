import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const numOfGuessAllowed = NUM_OF_GUESSES_ALLOWED;
const disable = "disabled";

export default function Input_box({ handleGuessSubmit, isFinished }) {
	const [guess, setGuess] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const arr = [...guess];
		console.log(guess);

		handleGuessSubmit(guess);
		setGuess("");
	};

	return (
		<>
			<form className='guess-input-wrapper' onSubmit={handleSubmit}>
				<label htmlFor='guessinput'>Enter guess:</label>
				<input
					required
					pattern='[a-zA-Z]{5}'
					title='5 lettered word'
					value={guess}
					onChange={(event) => {
						setGuess(event.target.value.toUpperCase());
					}}
					id='guessinput'
					type='text'
					disabled={isFinished}
				/>
			</form>
		</>
	);
}
