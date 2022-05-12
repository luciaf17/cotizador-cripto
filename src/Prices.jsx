import React, { useState} from "react";
import useGetData from "./hooks/useGetData";
import {BallTriangle} from "react-loader-spinner";

const Prices = () => {
  const [data, loading, error] = useGetData(`https://api.coincap.io/v2/assets/`);
  const [title, setTitle] = useState('')
  
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }


  return (
    <>
      <h1>Cotización en tiempo real</h1> <hr />
      {loading ? (
        <BallTriangle color="red" height={100} width={100} />
      ): error ? (
        <h3>Error: {error.message}</h3>
      ): (
        <div>
        <div>
          {data.data.map((crypto, i) => {
            return (
              <div key={i}>
                <h2>{crypto.name}</h2>
                <h3>{crypto.priceUsd}</h3>
              </div>
            );
          })}
        </div>
        <div>
          <h1>Filtrado</h1> <hr />
          <div>
            <input type="text" placeholder="Busca una cripto..." onChange={e => handleOnChange(e)} />
             {data.data.filter(crypto => crypto.name === title).map((crypto, i) => {
              return (
                <div key={i}>
                  <h2>{crypto.name}</h2>
                  <h3>{crypto.priceUsd}</h3>
                </div>
              );
            })} 
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default Prices;
