import React from "react";
import { checkGuess } from "../../game-helpers";

export default function GuessBox({ guess, answer }) {
  const arr = [...guess];
  const guessResult = checkGuess(guess, answer);
  console.log(guessResult);

  return (
    <div className="guess-results">
      <p className="guess">
        {arr.map((c, index) => (
          <span key={index} className={`cell ${guessResult[index].status}`}>
            {c}
          </span>
        ))}
      </p>
    </div>
  );
}
