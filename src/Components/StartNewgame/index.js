import React, { useState } from "react";

import "./style.scss";

const StartNewgame = ({ resetGame }) => {
  const [activeClassButton, setActiveClassButton] = useState(false);

  return (
    <div
      className="start-new-game"
      onMouseDownCapture={() => setActiveClassButton(true)}
      onMouseUpCapture={() => {
        setActiveClassButton(false);
        resetGame()
      }}
    >
      <button
        type="button"
        className={`button ${activeClassButton ? "active" : ""}`}
      >
        <p>New Game</p>
      </button>
    </div>
  );
};

export default StartNewgame;
