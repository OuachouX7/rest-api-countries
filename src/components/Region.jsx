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
    <div className={props.dark ? 'darkMode' : 'card-container'}>
      {region.length > 0 ? (
        region.map((reg) => (
          <div className="card">
            <img className="the-flag" src={reg.flag} alt="flag" />
            <h3 className={props.dark ? 'colorWhite' : 'colorBlack'}>{reg.name}</h3>
            <span className={props.dark ? 'colorWhite' : 'colorBlack'}>Population : {reg.population}</span>
            <span className={props.dark ? 'colorWhite' : 'colorBlack'}>Capital :{reg.capital}</span>
            <span className={props.dark ? 'colorWhite' : 'colorBlack'}>Region :{reg.region}</span>
          </div>
        ))
      ) : (
        <div className="lastCondition">we Don't have Data of This Region</div>
      )}
    </div>
  );
};

export default Region;
