import React from 'react'
import Slider from "react-slick";
import useGetData from "./hooks/useGetData";
import PricesItem from './PricesItem';
import Loader from "react-js-loader";


const Carousel = () => {

    const [ data, loading ] = useGetData(
        `https://api.coincap.io/v2/assets/?limit=10`
    );

        var settings = {
          className: "center",
          centerMode: true,
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight : true,
          accesibility : true,
        };
        return (
            <>
            {loading ? (
                 <Loader type="heart" bgColor={"blue"} title={"Cargando..."} color={'#94bbe9'} size={100} />
            ) : (
                <>
                <h1 className="recomendeds">Las 10 criptos recomendadas</h1>
                <Slider {...settings} className="slider">
                {data.data.map((crypto, i) => {
                    return (
                        <>
                        <PricesItem key={i} crypto={crypto} />
                        </>
                    );
                })}
                </Slider> <br />
                <hr />
                </>
            )}

            </>
        );
      }

export default Carousel;