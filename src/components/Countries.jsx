import { useState, useEffect } from "react";
import "./styles/cards.css";

const Countries = (props) => {
  const [card, setcard] = useState([
    {
      name: "",
      population: null,
      capital: "",
      region: "",
      flag: "",
    },
  ]);

  useEffect(() => {
    if (props.res) {
      const countryData = props.res.map((r) => ({
        name: r.name,
        population: r.population,
        capital: r.capital,
        region: r.region,
        flag: r.flags.png,
      }));
      setcard(countryData);
    }
  }, [props.res]);

  return (
    <div className={props.dark ? "card-container" : "card-container"}>
      {card.map((c) => (
        <div className={props.dark ? "darkMode" : "card"}>
          <img className="the-flag" src={c.flag} alt="flag" />
          <h3 className={props.dark ? "colorWhite" : "colorBlack"}>{c.name}</h3>
          <span className={props.dark ? "colorWhite" : "colorBlack"}>
            Population : {c.population}
          </span>
          <span className={props.dark ? "colorWhite" : "colorBlack"}>
            Capital :{c.capital}
          </span>
          <span className={props.dark ? "colorWhite" : "colorBlack"}>
            Region :{c.region}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countries;
