import React, { useState } from "react";

export default function Input_box({ handleUserGuess }) {
  const [userGuess, setUserGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ userGuess });
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guessinput">Enter guess:</label>
        <input
          required
          pattern="[a-zA-Z]{5}"
          title="5 lettered word"
          value={userGuess}
          onChange={(event) => {
            setUserGuess(event.target.value);
          }}
          id="guessinput"
          type="text"
        />
      </form>
    </>
  );
}
