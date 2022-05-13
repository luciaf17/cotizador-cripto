import React, {useEffect, useState} from "react";

const PricesItem = ({ crypto}) => {

    const [color, setColor] = useState("");

    const conditionalColor = () => {
        if (crypto.changePercent24Hr > 0) {
            setColor("green");
        } else {
            setColor("red");
        }
        console.log(color); 
      };

    useEffect(() => {
        conditionalColor();
    }, [crypto]);

  return (
      <div className="card  animate__animated animate__zoomIn" style={{backgroundColor: color}}>
        <h2>{crypto.symbol}</h2>
        <h6>{crypto.name}</h6>
        <h3>${parseFloat(crypto.priceUsd).toFixed(2)}USD / {parseFloat(crypto.changePercent24Hr).toFixed(2)}% </h3>
      </div>
  );
};

export default PricesItem;
