import { useState, useEffect } from "react";
import axios from "axios";
import CountryDetails from "./components/CountryDetails";
import CountryList from "./components/CoutryList";

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
  //console.log(displayData);
  return (
    <>
      find countries <input value={search} onChange={findHandler} />
      <>
        {displayData.length > 10 ? (
          <p>Too many matches specify filter</p>
        ) : displayData.length === 1 ? (
          <CountryDetails x={displayData[0]} />
        ) : (
          <CountryList listOfCountries={displayData} />
        )}
      </>
    </>
  );
}

export default App;
