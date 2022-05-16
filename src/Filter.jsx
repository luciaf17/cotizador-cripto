import React, {useState} from "react";
import PricesItem from "./PricesItem";
import './styles.css';

const Filter = ({data}) => {

  const [title, setTitle] = useState("");
 

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <div >
        <input  className=" animate__animated animate__flash"
          type="text"
          placeholder="Busca una cripto..."
          onChange={(e) => handleOnChange(e)}
        />
        <div className="card-grid" >
        {data.data
          .filter((crypto) => crypto.name.toString().toLowerCase().trim().includes(title.toString().toLowerCase().trim()) || crypto.symbol.toString().toLowerCase().trim().includes(title.toString().toLowerCase().trim()))
          .map((crypto, i) => {
            return (
                <PricesItem key={i} crypto={crypto} />
            );
          })
        }
          </div>
        </div>
      <hr />
    </div>
  );
};

export default Filter;
