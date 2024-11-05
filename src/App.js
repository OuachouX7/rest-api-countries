import data from "./data/data.json";
import "./stylee.css";
import Response from "./components/Response";
import Countries from "./components/Countries";
import Region from "./components/Region";
import { useEffect, useState } from "react";

function App() {
  const [inp, setinp] = useState();
  const [btn, setbtn] = useState(false);
  const [mydata, setmydata] = useState();
  const [selectedNamee, setselectedNamee] = useState(null);
  const [sel, setsel] = useState();
  const [dark, setdark] = useState(false);

  const handleMode = () => {
    setdark((prev) => !prev);
  };

  console.log(dark);

  const handleInput = (e) => {
    setinp(e.target.value);
  };

  const handleBtn = () => {
    setbtn(true);
  };

  const handleRegion = (e) => {
    const selectedRegion = e.target.value;
    setsel(selectedRegion);
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
    <div className={dark ? "darkMode" : "App"}>
      <div className={dark ? "darkModeHeader" : "header"}>
        <div className="title">
          <h1>Where In The World</h1>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={handleMode}>
            <svg
              className="dark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
            Dark Mode
          </button>
        </div>
      </div>
      <div className="form">
        <div className="form-left">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            className={dark ? "inpDark" : "input"}
            type="text"
            onChange={handleInput}
            placeholder="Search For A Country"
          />

          <button className={dark ? "darkSearch" : "Search"} onClick={handleBtn}>
            Search
          </button>
        </div>
        <div className={dark ? "inpDarkRight" : "form-right"}>
          <select
            name="region"
            onChange={handleRegion}
            className={dark ? "inpDark" : "input"}
          >
            <option>Filter By Region</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>America</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      {selectedNamee && selectedNamee.length > 0 && btn ? (
        <Response res={selectedNamee} color={dark} />
      ) : sel ? (
        <Region res={sel} color={dark} />
      ) : (
        <Countries res={mydata} color={dark} />
      )}
    </div>
  );
}

export default App;
