import React, { useEffect, useState } from "react";

import "./style.scss";
import Overlay from "../Overlay";
import Tiles from "../Tiles";
import WinnerMessage from "../WinnerMessage";
import StartNewgame from "../StartNewgame";
import { Helmet } from "react-helmet";

const Boards = () => {
  const tiles = () =>
    new Array(16)
      .fill()
      .map((item, index) => index + 1)
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ value: item, index }));

  const [numbers, setNumbers] = useState([]);

  const moveTiles = (tile) => {
    const index16 = numbers.find((item) => item.value === 16).index;
    if (
      ![index16 - 1, index16 + 1, index16 - 4, index16 + 4].includes(tile.index)
    )
      return;

    let newNumbers = [...numbers].map((number) => {
      if (number.index !== index16 && number.index !== tile.index)
        return number;
      else if (number.value === 16) return { value: 16, index: tile.index };

      return { value: tile.value, index: index16 };
    });

    setNumbers(newNumbers);
  };

  const resetGame = () => {
    setNumbers(tiles());
  };

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <>
      <Helmet>
        <title>Puzzle 15</title>
      </Helmet>
      <div className="board-wrapper">
        <div className="title">
          <div className="logo">
            <img
              src={
                require("./../../assets/images/iconmonstr-puzzle-15.svg")
                  .default
              }
            />
          </div>
          <div className="text">
            <p>Welcom To This Game Puzzle</p>
          </div>
        </div>
        <div className="board">
          <Overlay />
          {numbers.map((number, index) => (
            <Tiles key={index} number={number} moveTiles={moveTiles} />
          ))}
        </div>
        <WinnerMessage numbers={numbers} resetGame={resetGame} />

        {!numbers.every((number) => number.value === number.index + 1) ? (
          <StartNewgame numbers={numbers} resetGame={resetGame} />
        ) : null}
      </div>
    </>
  );
};

export default Boards;
