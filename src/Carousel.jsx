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
          autoplay: true,
          speed: 3000,
          autoplaySpeed: 3000,
          cssEase: "linear",
          pauseOnHover: true,
          adaptiveHeight : true,
          accesibility : true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
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