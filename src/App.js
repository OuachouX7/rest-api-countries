import data from "./data.json";
import "./style.css";
import { useEffect, useState } from "react";

function App() {
  const [inp, setinp] = useState();
  const [btn, setbtn] = useState(false);
  const [mydata, setmydata] = useState();
  const [selectedNamee, setselectedNamee] = useState(null);

  const handleInput = (e) => {
    setinp(e.target.value);
  };

  const handleBtn = () => {
    setbtn(true);
  };

  useEffect(() => {
    setmydata(data);
  }, []);

  useEffect(() => {
    if (btn && mydata.length > 0) {
      const found = mydata.filter(
        (dt) => dt.name.toLowerCase() === inp.toLowerCase()
      );
      setselectedNamee(found);
    }
  }, [btn, inp, mydata]);

  return (
    <div className="App">
      <div className="form">
        <input type="text" onChange={handleInput} />
        <button onClick={handleBtn}>Search</button>
      </div>

      <div className="container">
        {selectedNamee && selectedNamee.length > 0 && btn
          ? selectedNamee.map((selected, index) => (
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
                            <span className="lang">{lang.name}</span>
                          </>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="right-down">
                    <p>
                      Border Countries :{" "}
                      {selected.borders.map((s) => (
                        <span className="border-c">{s}</span>
                      ))}
                    </p>
                  </div>
                </div>
              </>
            ))
          : "error"}
      </div>
    </div>
  );
}

export default App;
