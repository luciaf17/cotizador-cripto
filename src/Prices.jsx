import React from "react";
import Filter from "./Filter";
import useGetData from "./hooks/useGetData";
import PricesItem from "./PricesItem";
import Loader from "react-js-loader";

import "./styles.css";

const Prices = () => {
  const [data, loading, error] = useGetData(
    `https://api.coincap.io/v2/assets/`
  );

  return (
    <>
      {loading ? (
        <Loader type="bubble-loop" bgColor={"blue"} title={"Cargando..."} color={'#94bbe9'} size={100} />
      ) : error ? (
        <h3>Error: {error.message}</h3>
      ) : (
        <>
        <h1 className="animate__animated animate__fadeInUp">Cotización en tiempo real de las principales criptomonedas</h1> <hr />
          <Filter data={data} />
          <div className="card-grid animate__animated animate__zoomIn">
            {data.data.map((crypto, i) => {
              return <PricesItem key={i} crypto={crypto} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Prices;
