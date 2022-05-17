import React from "react";
import Filter from "./Filter";
import useGetData from "./hooks/useGetData";
import Carousel from "./Carousel";
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
        <h1 className="animate__animated animate__fadeInUp"> <b>Cotización de Criptomonedas en tiempo real</b></h1> <hr />
          <Carousel data={data} loading={loading} />
          <Filter data={data} />
        </>
      )}
    </>
  );
};

export default Prices;
