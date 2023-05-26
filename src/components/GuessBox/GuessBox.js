import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

const Cell = ({ letter, status }) => {
  const className = status ? `cell ${status}` : `cell`;

  return <span className={className}> {letter}</span>;
};

export default function GuessBox({ value, answer }) {
  const guessResult = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={guessResult ? guessResult[num].letter : undefined}
          status={guessResult ? guessResult[num].status : undefined}
        />
      ))}
    </p>
  );
}
