import React from "react";

const PricesItem = ({ crypto }) => {
  return (
      <div className="card  animate__animated animate__zoomIn">
        <h2>{crypto.name}</h2>
        <h3>${parseFloat(crypto.priceUsd).toFixed(2)} USD</h3>
      </div>
  );
};

export default PricesItem;
