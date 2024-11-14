import "./styles/cards.css";
import { useEffect, useState } from "react";

const Region = (props) => {
  const [region, setregion] = useState([]);

  useEffect(() => {
    const selectedRegionn = props.data.filter(
      (data) => data.region === props.res
    );


    setregion(selectedRegionn);
  }, [props.res]);

  return (
    <div className={props.dark ? "darkMode" : "card-container"}>
      {region.length > 0 ? (
        region.map((reg,index) => (
          <div className={props.color ? "darkkkMode" : "card"}>
            <img key={index}  className="the-flag" src={reg.flag} alt="flag" />
            <h3 key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
              {reg.name}
            </h3>
            <span key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
              Population : {reg.population}
            </span>
            <span key={index}  className={props.color ? "colorWhite" : "colorBlack"}>
              Capital :{reg.capital}
            </span>
            <span  key={index} className={props.color ? "colorWhite" : "colorBlack"}>
              Region :{reg.region}
            </span>
          </div>
        ))
      ) : (
        <div className="lastCondition">we Don't have Data of This Region</div>
      )}
    </div>
  );
};

export default Region;
