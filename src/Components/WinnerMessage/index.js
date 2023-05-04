import React from "react";

import "./style.scss";
import StartNewgame from "../StartNewgame";

const WinnerMessage = ({ numbers , resetGame }) => {
  return numbers.every((number) => number.value === number.index + 1) ? (
    <div className="winner-message">
      <p>congraduation...!!! You Won.</p>

      <StartNewgame resetGame={resetGame} />
    </div>
  ) : null;
};

export default WinnerMessage;
