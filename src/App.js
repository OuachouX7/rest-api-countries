import data from "./data.json";
import "./stylee.css";
import Response from "./components/Response";
import Countries from "./components/Countries";
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
        {selectedNamee && selectedNamee.length > 0 && btn
          ? <Response res={selectedNamee}/>
          : <Countries res={mydata} />}

    </div>
  );
}

export default App;
