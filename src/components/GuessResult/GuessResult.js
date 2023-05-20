import React, { useLayoutEffect } from "react";

export default function GuessResult({ guessArray }) {
  return (
    <div className="guess-results">
      {guessArray.map((guess, index) => (
        <div className="guess" key={index}>
          {guess}
        </div>
      ))}
    </div>
  );
}
