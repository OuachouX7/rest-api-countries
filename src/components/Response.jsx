import { useEffect, useState } from "react";
import "./styles/cards.css";

const Response = (props) => {
  const [ress, setress] = useState([
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
      setress(countryData);
    }
  }, [props.res]);
  var classs = "";

  if (ress.length <= 3 && props.color) {
    classs = "darkkMode noAuto";
  } else if (ress.length <= 3 && !props.color) {
    classs = "card-container noAuto";
  } else if (ress.length > 3 && props.color) {
    classs = "darkkMode Auto";
  } else if (ress.length > 3 && !props.color) {
    classs = "card-container Auto";
  }

  return (
    <div className={classs}>
      {ress.map((c,index) => (
        <div className={props.color ? "darkkkMode" : "card"}>
          <img key={index}  className="the-flag" src={c.flag} alt="flag" />
          <h3 key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
            {c.name}
          </h3>
          <span key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
            Population : {c.population}
          </span>
          <span key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
            Capital :{c.capital}
          </span>
          <span  key={index} className={props.color ? "colorWhite" : "colorBlack"}>
            Region :{c.region}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Response;
