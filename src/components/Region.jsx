import dataJson from "../data/data.json";
import "./styles/cards.css";
import { useEffect, useState } from "react";

const Region = (props) => {
  const [region, setregion] = useState([]);

  useEffect(() => {
    const selectedRegionn = dataJson.filter(
      (data) => data.region === props.res
    );

    setregion(selectedRegionn);
  }, [props.res]);

  return (
    <div className="card-container">
      {region.length > 0 ? region.map((reg) => (
        <div className="card">
          <img className="the-flag" src={reg.flag} alt="flag" />
          <h3>{reg.name}</h3>
          <span>Population : {reg.population}</span>
          <span>Capital :{reg.capital}</span>
          <span>Region :{reg.region}</span>
        </div>
      )) : <div className="lastCondition">
        we Don't have Data of This Region
            </div>}
    </div>
  );
};

export default Region;
