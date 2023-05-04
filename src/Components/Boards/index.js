import React, {  useState } from "react";

import "./style.scss";
import Overlay from "../Overlay";
import Tiles from "../Tiles";

const Boards = () => {
  const tiles = () =>
    new Array(16)
      .fill()
      .map((item, index) => index + 1)
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ value: item, index }));

  const [numbers, setNumbers] = useState(tiles());

  const moveTiles = (tile) => {
    const index16 = numbers.find((item) => item.value === 16);
    if (
      ![index16 - 1, index16 + 1, index16 - 4, index16 + 4].includes(tile.index)
    ) {
      return;
    }
    const newNumbers = [...numbers].map((number, index) => {
      if (number !== index16 && number.index !== tile.index) {
        return number;
      }
      else if (number.value === 16) {
        return {value: 16, index : tile.index}
      }
      else {
        return {value: tile.value, index: 16}
      }
    });

    setNumbers(newNumbers)
  };


  return (
    <div className="board-wrapper">
      <div className="board">
          <Overlay />
          {
            numbers.map((number,index) => (<Tiles key={index} number={number} moveTiles={moveTiles} />))
          }
      </div>
    </div>
  );
};

export default Boards;
