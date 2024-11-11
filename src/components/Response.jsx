import "./styles/style.css";

const Response = (props) => {
  return (
    <div className="container">
      {props.res.map((selected) => (
        <>
          <div className="left">
            <img className="img" src={selected.flags.svg}></img>
          </div>
          <div className="right">
            <div className="right-up">
              <div className="right-up-left">
                <h2>{selected.name}</h2>
                <p>Native Name : {selected.nativeName}</p>
                <p>Native population : {selected.population}</p>
                <p>region : {selected.region}</p>
                <p>subregion : {selected.subregion}</p>
                <p>capital : {selected.capital}</p>
              </div>
              <div className="right-up-right">
                <p>topLevelDomainx : {selected.topLevelDomain}</p>
                <p>currencies : {selected.currencies[0].name}</p>
                <p>
                  Languages :{" "}
                  {selected.languages.map((lang) => (
                    <>
                      <span className={props.color ? "dark-border" : "lang"}>
                        {lang.name}
                      </span>
                    </>
                  ))}
                </p>
              </div>
            </div>
            <div className="right-down">
              <p>Border Countries : </p>
              {selected.borders.map((s) => (
                <span className={props.color ? "dark-border" : "border-c"}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Response;
