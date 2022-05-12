import React, { useState} from "react";
import useGetData from "./hooks/useGetData";

const Prices = () => {
  const [data, loading, error] = useGetData(`https://api.coincap.io/v2/assets/`);
  const [title, setTitle] = useState('')
  
  const handleOnChange = (e) => {
    //console.log(e.target.value);
    setTitle(e.target.value);
    //console.log(title);
  }


  return (
    <>
      <h1>Cotización en tiempo real</h1> <hr />
      {loading ? (
        <h1>Cargando...</h1>
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
