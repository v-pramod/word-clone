import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import Input_box from "../Input_box/Input_box";
import GuessResult from "../GuessResult/GuessResult";
// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessArray, setGuessArray] = useState([]);
	const [numOfGuesses, setNumOfGuesses] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);

	let isFinished;

	if (isCorrect || numOfGuesses === 6) {
		isFinished = true;
	}

	const handleGuessSubmit = (guess) => {
		const newGuessArray = [...guessArray, guess];
		setGuessArray(newGuessArray);
		setNumOfGuesses(numOfGuesses + 1);
		if (guess === answer) {
			setIsCorrect(true);
		}
	};

	const Win = ({ numOfGuesses }) => {
		return (
			<div className='happy banner'>
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong> {numOfGuesses} guesses</strong>.
				</p>
			</div>
		);
	};

	const Lose = ({ answer }) => {
		return (
			<div className='sad banner'>
				<p>
					Sorry, the correct answer is <strong>{answer}</strong>.
				</p>
			</div>
		);
	};

	return (
		<>
			<GuessResult guessArray={guessArray} answer={answer} />
			{isCorrect && <Win numOfGuesses={numOfGuesses} />}
			{numOfGuesses > 5 && !isCorrect && <Lose answer={answer} />}
			<Input_box
				handleGuessSubmit={handleGuessSubmit}
				answer={answer}
				isFinished={isFinished}
			/>
		</>
	);
}

export default Game;
