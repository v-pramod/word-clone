import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input_box from "../Input_box/Input_box";
import GuessResult from "../GuessResult/GuessResult";
import GuessBox from "../GuessBox/GuessBox";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
const numOfRows = NUM_OF_GUESSES_ALLOWED;

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessArray, setGuessArray] = useState([]);
  

  const handleGuessSubmit = (guess) => {
    const newGuessArray = [...guessArray, guess];
    setGuessArray(newGuessArray);
  };

  const guessBox = () => {
    const components = [];

    for (let i = 0; i < numOfRows; i++) {
      if (guessArray.length > i)
        components.push(
          <GuessBox key={i} guess={guessArray[i]} answer={answer} />
        );
      else components.push(<GuessBox key={i} guess="     " answer={answer} />);
    }
    return components;
  };

  return (
    <>
      <div>{guessBox()}</div>
      <GuessResult guessArray={guessArray} />
      <Input_box handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
