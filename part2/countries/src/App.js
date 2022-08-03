import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((result) => {
      setStateData(result.data);
      //console.log(result.data);
    });
  }, []);

  const showState = stateData.filter((x) =>
    x.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const findHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div>
        Find countries name
        <input value={search} onChange={findHandler} />
      </div>
      <div>
        {showState.map((state) => (
          <li key={state.id}>{state.name.common}</li>
        ))}
      </div>
    </>
  );
}

export default App;
