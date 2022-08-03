import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [stateData, setStateData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((result) => {
      setStateData(result.data);
      //console.log(result.data);
    });
  }, []);

  // const showState = stateData.filter((x) =>
  //   x.name.common.toLowerCase().includes(search.toLowerCase())
  // );

  const findHandler = (e) => {
    setSearch(e.target.value);
    const filteredState = stateData.filter((state) => {
      return state.name.common.toLowerCase().includes(e.target.value);
    });
    setDisplayData(filteredState);
  };
  console.log(displayData);
  return (
    <>
      <div>
        Find countries name
        <input value={search} onChange={findHandler} />
      </div>
      <div>
        {displayData.length > 10 ? (
          <p>too many matches,specify another filter</p>
        ) : (
          displayData.map((state) => (
            <li key={state.id}>{state.name.common}</li>
          ))
        )}
      </div>
    </>
  );
}

export default App;
