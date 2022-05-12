import React, { useState, useEffect } from "react";
import axios from "axios";

const Prices = () => {
  const [cryptoInfo, setCryptoInfo] = useState([]);
  const [cryptoPriceUsd, setCryptoPriceUsd] = useState([]);
  //let id = document.getElementById("id").value;

  useEffect(() => {
    const getCryptoInfo = async () => {
      try {
        const url = `https://api.coincap.io/v2/assets/bitcoin`;
        const response = await axios.get(url);
        setCryptoInfo(response);
        console.log(response);
        setCryptoPriceUsd(Math.floor(response.data.data.priceUsd));
        console.log(cryptoPriceUsd);
      } catch (error) {
        console.log(error);
      }
    };
    getCryptoInfo();
  }, [cryptoInfo]);

  return (
    <>
      <h1>Cotización en tiempo real</h1> <hr />
      {!cryptoPriceUsd ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
        <h1 id="bitcoin" value="bitcoin">El precio de Bitcoin es: {cryptoPriceUsd} USD </h1>
        <h1 id="ethereum" value="ethereum">El precio de Ethereum es: {cryptoPriceUsd} USD </h1>
        <h1 id="cardano" value="cardano">El precio de Cardano es: {cryptoPriceUsd} USD </h1>
        </div>
      )}
    </>
  );
};

export default Prices;