import React from "react";

export default function GuessBox({ guess }) {
  const arr = [...guess];

  return (
    <div className="guess-results">
      <p className="guess">
        {arr.map((c, index) => (
          <span key={index} className="cell">
            {c}
          </span>
        ))}
      </p>
    </div>
  );
}
