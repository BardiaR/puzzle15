import React from "react";

import "./style.scss";

const Tiles = ({ number, moveTiles }) => {
  return (
    <div
      className={`tile ${number.value === 16 ? "disabled" : ""} slot--${
        number.index
      } ${
        number.value === number.index + 1
          ? "currect"
          : ""
      } `}
      onClick={() => moveTiles(number)}
    >
      {number.value === 16 ? "" : number.value}
    </div>
  );
};

export default Tiles;
