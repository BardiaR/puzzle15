import React from "react";

import "./style.scss";

const Overlay = () => {
  return new Array(16).fill().map((item, index) => (
    <div className={`overlay`} key={index} >
      
    </div>
  ));
};

export default Overlay;
