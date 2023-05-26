import React, { useState } from "react";

export default function Input_box({ handleGuessSubmit }) {
  const [guess, setGuess] = useState("");
  const [numOfGuesses, setNumOfGuesses] = useState(0);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = [...guess];
    console.log(guess);

    setNumOfGuesses(numOfGuesses + 1);

    handleGuessSubmit(guess);
    setGuess("");
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guessinput">Enter guess:</label>
        <input
          required
          pattern="[a-zA-Z]{5}"
          title="5 lettered word"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
          id="guessinput"
          type="text"
        />
      </form>
    </>
  );
}
