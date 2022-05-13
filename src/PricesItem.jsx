import React, {useEffect, useState} from "react";

const PricesItem = ({ crypto}) => {

    const [color, setColor] = useState("");
    const url = `https://www.binance.com/es/trade/${crypto.symbol}_BUSD?theme=dark&type=spot`;

    useEffect(() => {
      const conditionalColor = () => {
        if (crypto.changePercent24Hr > 0) {
            setColor("green");
        } else {
            setColor("red");
        }
      };
      conditionalColor();
    }, [crypto]);

  return (
      <div className="card  animate__animated animate__zoomIn" style={{backgroundColor: color}}>
        <h2>{crypto.symbol}</h2>
        <h6>{crypto.name}</h6>
        <h3>${parseFloat(crypto.priceUsd).toFixed(2)} USD / {parseFloat(crypto.changePercent24Hr).toFixed(2)}% </h3>
        <div className="d-grid gap-2 col-6 mx-auto pt-2">
          <a href={url} target="_blank">
            <button className="btn" type="button">
              Ver Gráfico
            </button>
          </a>
        </div>
      </div>
  );
};

export default PricesItem;
