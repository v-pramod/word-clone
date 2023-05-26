import React, { useLayoutEffect } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessBox from "../GuessBox/GuessBox";

export default function GuessResult({ guessArray, answer }) {
  const numOfRows = NUM_OF_GUESSES_ALLOWED;

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessBox key={num} value={guessArray[num]} answer={answer} />
      ))}
    </div>
  );
}
